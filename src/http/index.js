import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://35.189.10.196/api/',
    timeout: 3000,
});


export const Post = async (api, params) => {
    return new Promise((resolve, reject) => {
        instance.post(api, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(error)
            })
    })
};

export const Get = async (api, params) => {
    return new Promise((resolve, reject) => {
        instance.get(api, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(error)
            })
    })
};