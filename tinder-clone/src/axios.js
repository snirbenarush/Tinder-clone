import axios from "axios";

const instance = axios.create({
  baseURL: "https://tik-tok-be.herokuapp.com",
});

export default instance;
