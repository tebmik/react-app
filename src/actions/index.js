import { SIGN_IN, SIGN_OUT } from "./types.js";
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
};