import React from "react";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId:"831874009542-uqnemmpn734kd14vr9vsh8cpu0pam9on.apps.googleusercontent.com",
                scope: "email"
            })
        })
    }
    render() {
        return(
            <div>GoogleAuth</div>
        );
    };
};
export default GoogleAuth;