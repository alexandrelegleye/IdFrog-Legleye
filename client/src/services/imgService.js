import { sendPostRequest } from "../lib/Axios";


export const uploadProjectImage = async (token, projectImage) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  };
  return sendPostRequest("/project/img/upload", config, projectImage)
}