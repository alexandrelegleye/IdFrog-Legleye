import { sendPostRequest } from "../lib/Axios";


export const postContribution = async (token, projectId, data) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return sendPostRequest(`/profile/contribute/${projectId}`, config, data)
}