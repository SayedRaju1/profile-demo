import axios from "axios";
import Axios from "../../services/NetworkService";

// ---->write your api call<----

// testing...
export const getTodo = () => {
    console.log("getTodo api call");
    return Axios.get("/todos/");
};

export const getSingleTodo = () => {
    console.log("getSingleTodo api call");
    return Axios.get("/todos/1");
};

export const getUsers = () => {
    return Axios.get("/users/all");
};

//add new user
export const postNewUser = (formData) => {
    return Axios.post("/users",
        formData,
        { headers: { 'content-type': 'multipart/form-data' } }
    );
};
