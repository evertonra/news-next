import axios, { AxiosRequestConfig, Method } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const APP_TOKEN = process.env.NEXT_PUBLIC_APP_TOKEN || "";

const getBearerToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

const getHeaders = () => {
  const headers: Record<string, string> = {
    app: APP_TOKEN,
    "Content-Type": "application/json",
  };
  console.log("APP_TOKEN", process.env);
  console.log("API_URL", API_URL);
  const bearer = getBearerToken();
  if (bearer) {
    headers["Authorization"] = `Bearer ${bearer}`;
  }
  return headers;
};

const request = async (
  method: Method,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
) => {
  const headers = getHeaders();
  return axios({
    method,
    url: `${API_URL}${url}`,
    data,
    headers,
    ...config,
  });
};

export const apiService = {
  get: (url: string, config?: AxiosRequestConfig) =>
    request("GET", url, undefined, config),
  post: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
    request("POST", url, data, config),
  put: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
    request("PUT", url, data, config),
  delete: (url: string, config?: AxiosRequestConfig) =>
    request("DELETE", url, undefined, config),
};
