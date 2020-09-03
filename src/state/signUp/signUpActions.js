import signUpConstants from "../../common/constants/actions/signUpConstants"

export const signUp = credentials => (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(() =>{
        dispatch({
            type: authConstants.LOGIN_SUCCESS
        })
    }).catch((err)=>{
        console.log(err.message)
        dispatch({
            type: authConstants.LOGIN_FAILURE,
            err: err.message
        })
    })
};


