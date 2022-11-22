import { default as Axios } from "axios";

const baseUrl = process.env.REACT_APP_BASEURL

const axios = Axios.create({
  baseURL:  baseUrl,
  timeout: 10000,
  headers: {
    // 'CSRF-Token': csrfToken
  }
});



export const sendGetRequest = async (url, params = {}, headers = {}) => {
  try{    
    let response =  await axios.get(url, 
      params,
      headers,   
    )
    //console.log("sendGetRequest axios", response);
    return (response)
  }
  catch (error){
    //console.log(error);
    return (error.response)
  } 
};

export const sendPostRequest = async (url, params = {}, headers = {}, ) => {
  try{
    let response =  await axios.post(url, 
      headers,
      params,       
    )
    //console.log("sendPostRequest axios", response);
    return (response)
  }
  catch (error){
    //console.log(error);
    return (error.response)
  } 

};

export const sendPatchRequest = async (url, params = {}, headers = {}, ) => {
  try{
    let response =  await axios.patch(url,
      headers,   
      params,      
    )
    //console.log("sendPatchRequest axios", response);
    return (response)
  }
  catch (error){
    //console.log(error);
    return (error.response)
  } 
 
};

export const sendDeleteRequest = async (url, headers = {}, ) => {
  try{
    let response =  await axios.delete(url, 
      headers,       
    )
    // console.log('sendDeleteRequest axios', response);
    return (response)
  }
  catch (error){
    //console.log(error);
    return (error.response)
  } 
 
};

