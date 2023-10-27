import axios from "axios";
let axiosinstance = axios.create({
  baseURL: "http://localhost:8082/"
})
export default axiosinstance;