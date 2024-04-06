import axios from "axios";
const privateAPI = axios.create({
    baseURL:"https://fakestoreapi.com",
});
export default privateAPI;

