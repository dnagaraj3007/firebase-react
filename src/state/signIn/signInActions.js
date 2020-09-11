import authConstants from "../../common/constants/actions/authConstants"

export const signIn = credentials => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  ).then((data) =>{
      console.log("data",data);
     dispatch({
        type: authConstants.LOGIN_SUCCESS
     })
  }).catch((err)=>{
         dispatch({
            type: authConstants.LOGIN_FAILURE,
            err: err.message
         })
     })
};

export const signOut = () =>(dispatch, getState, getFirebase) =>{
    const firebase = getFirebase();
    firebase.auth().signOut().then(()=>{
        dispatch({
            type:authConstants.LOGOUT_SUCCESS
        })
    }).catch(err=> {
        dispatch({
            type: authConstants.LOGOUT_FAILURE,
            err: err.message
        })
    })
}

