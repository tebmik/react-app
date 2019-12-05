import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { createStreams } from "../../actions";

class StreamCreate extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header"> {error} </div>
                </div>
            );
        }
    }

    renderInput = ({ label,input,meta }) => {
        return (
            <div className="field error">
                <label>{ label }</label>
                <input { ...input } autoComplete="off" />
                <div> { this.renderError(meta) } </div>
            </div>
        )
    }

    onSubmit(formValue) {
        this.props.createStream(formValue);
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValue => {
    const errors = {};
    if (!formValue.title){
        errors.title = "Title field is required!";
    }
    if (!formValue.description) {
        errors.description = "Desciption field is required"
    }
    return errors;
}

const formWrapped = reduxForm({
    form:"streamCreate",
    validate
})(StreamCreate);

export default connect(null, { createStreams })(formWrapped);