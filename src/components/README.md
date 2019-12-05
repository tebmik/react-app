create the mapStateToProps which will hold the isSignedIn state.

replace the this.setState with the onAuthChange function which will decide whether the user isSignedIn.

in the renderAuthButton() we can replace the state with props as we no longer have a state object in there.

in the connect function withing the export. Replace null with the mapStateToProps.

This will reactivate the signin, signout button