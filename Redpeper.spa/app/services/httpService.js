/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import axios from "axios";

const httpService = axios.create({
  baseURL: "http://localhost:5000/api"
});

export default httpService;
