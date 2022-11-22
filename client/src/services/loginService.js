import { sendPostRequest } from "../lib/Axios";
import { sendGetRequest } from "../lib/Axios";

export const postLogin = async (data) => {
  //console.log('logindata request', data);   
  return sendPostRequest("/login",null, data);
};

export const getLogout = async () => {     
  return sendGetRequest("/logout");
};

export const postSignin = async (data) => {
  //console.log('postSignin', data);   
  return sendPostRequest("/subscribe", null, data);

};

