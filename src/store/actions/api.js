import axios from "axios";
import { LOCAL_AUTH_KEY } from "../../constants/keys";

axios.defaults.baseURL = "https://softbucket.herokuapp.com/api/v1"

axios.interceptors.request.use(
    config => {
        let localStorageData = localStorage.getItem(LOCAL_AUTH_KEY);
        if (localStorageData) {
            let token = localStorageData.access_token;
            config.headers.Authorization = token;
        }
        console.log(config);
        return config;
    },
    error => Promise.reject(error)
);

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem(LOCAL_AUTH_KEY);
            window.location = '/login';
        } else {
            if (error.response.status === 403) {
                window.location = '/';
            }
            return Promise.reject(error.response);
        }
    });


// ---->write your api call<----

// testing...
export const getTodo = () => {
    console.log("getTodo api call")
    return axios.get('/todos/');
}

export const getSingleTodo = () => {
    console.log("getSingleTodo api call")
    return axios.get('/todos/1');
}