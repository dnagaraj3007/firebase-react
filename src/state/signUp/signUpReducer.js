import signUpConstants from "../../common/constants/actions/signUpConstants"

const initialState = {
    signUpError: null
}
const signInReducer = (state =initialState, action) =>{

    switch(action.type){
        case signUpConstants.REGISTER_FAILURE: {
            return {
                ...state, signUpError: action.err
            }
        }
        case signUpConstants.REGISTER_SUCCESS: {
            return state;
        }
        default:
            return state
    }
}
export default signInReducer
