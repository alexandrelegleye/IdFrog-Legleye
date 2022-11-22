import { sendDeleteRequest, sendGetRequest, sendPatchRequest, sendPostRequest } from "../lib/Axios";


export const getProjectsList = () => {
  //console.log("dans la req axios");
  return sendGetRequest("/project/list");
};

export const getProjectById = (id) => {
  //console.log("dans la req axios");
  return sendGetRequest(`/project/${id}`);
};

export const postProject = async (token, data) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return sendPostRequest("/profile/project/create", config, data)
}

export const patchProject = async (projectId, token, data) => {
  //console.log("data", data);
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return sendPatchRequest(`/profile/project/${projectId}`, config, data)
}

export const deleteProject = async (projectId, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return sendDeleteRequest(`/profile/project/${projectId}`, config)
}

