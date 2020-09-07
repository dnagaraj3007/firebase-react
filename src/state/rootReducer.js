import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase"

import signInReducer from './signIn/signInReducer'
import signUpReducer from './signUp/signUpReducer'
import projectReducer from './Projects/projectReducer'

const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    firebase: firebaseReducer,
    projects: projectReducer
})

export default rootReducer;
