import signUpConstants from "../../common/constants/actions/signUpConstants"

const initialState = {
    authError: null
}
const signInReducer = (state =initialState, action) =>{

    switch(action.type){
        case signUpConstants.REGISTER_FAILURE: {
            return {
                ...state, authError: action.err
            }
        }
        case signUpConstants.REGISTER_SUCCESS: {
            return {
                ...state,
                authError: null
            }
        }
        default:
            return state
    }
}
export default signInReducer
