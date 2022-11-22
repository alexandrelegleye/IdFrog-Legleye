import { sendGetRequest } from "../lib/Axios";

const getProjectsList = () => {
  //console.log("dans la req axios");
  return sendGetRequest("/project/list");
};

const getProjectById = (id) => {
  //console.log("dans la req axios");
  return sendGetRequest(`/project/${id}`);
};

export { getProjectsList, getProjectById };

