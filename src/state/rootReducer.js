import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase"

import signInReducer from './signIn/signInReducer'
import signUpReducer from './signUp/signUpReducer'

const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    firebase: firebaseReducer
})

export default rootReducer;
