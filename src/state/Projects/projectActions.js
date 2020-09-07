import projectActions from "../../common/constants/actions/projectConstants";
import axios from "../../config/axiosConfig";
import constants from "../../common/constants/constants";

export const getAllProjects = () => dispatch => {
  console.log("in actions");
  axios.get(constants.apiConstants.PROJECTS.GET_ALL_PROJECTS).then(projects => {
    console.log(projects);
    dispatch({
      type: projectActions.GET_ALL_PROJECTS,
      payload: projects
    });
  });
};
