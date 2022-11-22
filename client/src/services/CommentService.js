import { sendPostRequest } from "../lib/Axios";


export const postComment = async (token, projectId, data) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return sendPostRequest(`/profile/project/${projectId}/comment`, config, data)
}