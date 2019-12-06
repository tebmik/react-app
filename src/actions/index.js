import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM 
} from "./types.js";

import streams from "../apis/streams";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const createStreams = formValue => async dispatch => {
    const response = await streams.post("/streams", formValue);

    dispatch({type:CREATE_STREAM, payload:response.data })
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.post("/streams");

    dispatch({type:FETCH_STREAMS, payload:response.data })
};

export const fetchStream = id => async dispatch => {
    const response = await streams.post(`/streams/${id}`);

    dispatch({type:FETCH_STREAM, payload:response.data })
};

export const editStream = (id, formValue) => async dispatch => {
    const response = await streams.put(`/streams/${id}`,formValue);

    dispatch({type:EDIT_STREAM, payload:response.data })
};

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({type:DELETE_STREAM, payload:id })
};