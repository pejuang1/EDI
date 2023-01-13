import axios from "axios";
import { MAIN_API } from "../GlobalFunction";

export const editUser = async(token, _id, data) => {
    try {
        const Axios = axios.create({
            baseURL: MAIN_API,
            headers:{
                Authorization: `Bearer ${token}`
            },
          });
        return await Axios.put(`/user/edit/${_id}`, data)
    } catch (error) {
        console.log('editUser', error.message)
        return error.response
    }
}

export const deleteUser = async(token, _id) => {
    try {
        const Axios = axios.create({
            baseURL: MAIN_API,
            headers:{
                Authorization: `Bearer ${token}`
            },
          });
        return await Axios.delete(`/user/delete/${_id}`)
    } catch (error) {
        console.log('deleteUser', error.message)
        return error.response
    }
}

export const getUser = async(token) => {
    try {
        const Axios = axios.create({
            baseURL: MAIN_API,
            headers:{
                Authorization: `Bearer ${token}`
            },
          });
        return await Axios.get('/user')
    } catch (error) {
        console.log('getUser', error.message)
        return error.response
    }
}

export const getDetailUser = async(token, _id) => {
    try {
        const Axios = axios.create({
            baseURL: MAIN_API,
            headers:{
                Authorization: `Bearer ${token}`
            },
          });
        return await Axios.get(`/user/${_id}`)
    } catch (error) {
        console.log('getDetailUser', error.message)
        return error.response
    }
}

export const verifyToken = async(token) => {
    try {
        const Axios = axios.create({
            baseURL: MAIN_API,
            headers:{
                Authorization: `Bearer ${token}`
            },
          });
        return await Axios.post('/user/verify')
    } catch (error) {
        console.log('verifyToken', error.message)
        return error.response
    }
}