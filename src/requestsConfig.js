import axios from "axios";

axios.interceptors.request.use(
  function(config) {
    const _token = localStorage.getItem("_token");
    if (_token) {
      config.headers["Authorization"] = `Bearer ${_token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    const { data } = response;
    if (data.token) {
      localStorage.setItem("_token", data.token);
    }
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
