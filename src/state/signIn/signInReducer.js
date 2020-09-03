import authConstants from "../../common/constants/actions/authConstants"

const initialState = {
    authError: null
}
const signInReducer = (state =initialState, action) =>{

    switch(action.type){
        case authConstants.LOGIN_FAILURE: {
            return {
                ...state, authError: action.err
            }
        }
        case authConstants.LOGIN_SUCCESS: {
            return {
                ...state,
                authError: null
            }
        }
        case authConstants.LOGOUT_SUCCESS:{
            console.log("logout success");
            return state
        }
        case authConstants.LOGOUT_FAILURE:{
            console.log("logout failure")
            return state
        }
        default:
            return state
    }
}
export default signInReducer
