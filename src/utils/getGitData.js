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
    if (error.response) {
      return { error: true, msg: error.response.data.message || "Error occurred" };
    }
    return { error: true, msg: error.message || "Unexpected error occurred" };
  }
};
const fetchFilterOptions = async () => {
  const { error, data } = await getData({ endpoint: "filters/options" });
  console.log({error:error, data:data});
  if (!error) {
    return data; // Expected to return an object like { severity: [...], state: [...], ... }
  } else {
    console.error("Failed to fetch filter options:", data.msg);
    return {};
  }
};


  // fetchFilterOptions();

export default getData;