import projectConstants from "../../common/constants/actions/projectConstants";

const initialState = {
    projects: []
}

const projectReducers = (state =initialState, action) =>{
    console.log("state", state)
    switch(action.type){

        case projectConstants.GET_ALL_PROJECTS: {
            console.log(action);
            return {
                ...state, payload: action.payload
            }
        }
        case projectConstants.GET_ONE_PROJECT: {
            return {
                ...state,
                authError: null
            }
        }
        default:
            return state
    }
}
export default projectReducers
