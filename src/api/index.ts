import axios from "axios";

const instance = axios.create({
  baseURL: "https://demo.martian.services/api",
  headers: {
    "X-Auth": process.env.REACT_APP_AUTH_TOKEN,
  },
});

export default instance;
