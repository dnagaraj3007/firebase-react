import projectActions from "../../common/constants/actions/projectConstants";
import axios from "../../config/axiosConfig";
import constants from "../../common/constants/constants";

export const getAllProjects = () => dispatch => {
  axios.get(constants.apiConstants.PROJECTS.GET_ALL_PROJECTS, {
    params: {
      page:0,
      limit: 5,
      sectors: "agriculture",
      location: "anantapur (andhra pradesh)"
    }
  }).then(response => {
    dispatch({
      type: projectActions.GET_ALL_PROJECTS,
      payload: response.data.projects
    });
  }).catch(error =>{
    console.log("error", error);
  });
};
