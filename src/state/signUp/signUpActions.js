import signUpConstants from "../../common/constants/actions/signUpConstants"

export const signUp = newUser => (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
    ).then(() =>{
        dispatch({
            type: signUpConstants.REGISTER_SUCCESS
        })
    }).catch((err)=>{
        dispatch({
            type: signUpConstants.REGISTER_FAILURE,
            err: err.message
        })
    })
};


