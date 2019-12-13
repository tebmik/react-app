import React from "react";
import _ from "lodash";
import {connect} from "react-redux";
import StreamForm from "./StreamForm";
import { fetchStream, editStream } from "../../actions";

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = formValue => {
        this.props.editStream(this.props.match.params.id, formValue);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    initialValues={_.pick(this.props.stream, "title", "description")}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);