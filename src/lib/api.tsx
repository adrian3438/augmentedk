import axios from "axios";

const instance = axios.create({
    baseURL : 'https://marineplaza.org/ak-api/controller',
})

export default instance;
