import axios from "axios";
import { MAIN_API } from "../GlobalFunction";

export const login = async(data) => {
    try {
        const Axios = axios.create({
            baseURL: MAIN_API,
            // headers:{
            //     Authorization: `Bearer ${token}`
            // },
          });
        return await Axios.post('/user/login', data)
    } catch (error) {
        console.log('getProject', error.message)
        return error.response
    }
}

export const register = async(data) => {
    try {
        const Axios = axios.create({
            baseURL: MAIN_API,
            // headers:{
            //     Authorization: `Bearer ${token}`
            // },
          });
        return await Axios.post('/user/register', data)
    } catch (error) {
        console.log('getProject', error.message)
        return error.response
    }
}