import projectActions from "../../common/constants/actions/projectConstants";
import axios from "../../config/axiosConfig";
import constants from "../../common/constants/constants";

export const getAllProjects = () => dispatch => {
  axios.get(constants.apiConstants.PROJECTS.GET_ALL_PROJECTS).then(projects => {
    dispatch({
      type: projectActions.GET_ALL_PROJECTS,
      payload: projects
    });
  });
};
