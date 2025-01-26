import axios from "axios";
import { useEffect } from "react";

const GITHUB_PERSONAL_ACCESS_TOKEN = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN;
const GITHUB_BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;

const getData = async ({ endpoint, params = {}, headers = {}, method = "GET" }) => {
  try {
    const url = `${GITHUB_BASE_URL}/${endpoint}`;

    const response = await axios({
      url,
      method,
      params, 
      headers: {
        Authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
        ...headers, 
      },
    });

    return { error: false, data: response.data };
  } catch (error) {
    console.log(error);
    
    if (error.response) {
      return { error: true, msg: error.response.data.message || "Error occurred", statusCode: error.response.status };
    }
    return { error: true, msg: error.message || "Unexpected error occurred" , statusCode: error.status };
  }
};



export default getData;
