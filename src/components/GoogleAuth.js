import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
    state={ isSignedIn:null }
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId:"831874009542-uqnemmpn734kd14vr9vsh8cpu0pam9on.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
            
        })
    }
    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.signIn()
        } else {
            this.props.signOut()
        }
    }
    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign In
                </button>
            );
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut()
    }
    
    render() {
        return(
            <div>{this.renderAuthButton()}</div>
        );
    };
};
export default connect(null, { signIn, signOut })(GoogleAuth);