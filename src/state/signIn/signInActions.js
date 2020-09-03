import authConstants from "../../common/constants/actions/authConstants"

export const signIn = credentials => (dispatch, getState, getFirebase) => {
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
    console.log(firebase);
};

export const signOut = () =>(dispatch, getState, getFirebase) =>{
    const firebase = getFirebase();
    firebase.auth().signOut().then(()=>{
        console.log("Signout successful");
        dispatch({
            type:authConstants.LOGOUT_SUCCESS
        })
    }).catch(err=> {
        dispatch({
            type: authConstants.LOGOUT_FAILURE,
            err: err.message
        })
    })
    console.log(firebase);
}

