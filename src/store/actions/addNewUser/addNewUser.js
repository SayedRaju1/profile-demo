import * as actionTypes from '../../../constants/actionTypes';
import { postNewUser } from "../api";

const addNewUserStart = () => {
    return {
        type: actionTypes.ADD_NEW_USER_START
    };
}
const addNewUserSuccess = (data) => {
    return {
        type: actionTypes.ADD_NEW_USER_SUCCESS,
        data: data,
    };
}

const addNewUserFail = (error) => {
    return {
        type: actionTypes.ADD_NEW_USER_FAIL,
        error: error,
    };
}

export const login = () => {
    return async (dispatch) => {
        dispatch(addNewUserStart());
        try {
            let response = await postNewUser();
            dispatch(addNewUserSuccess(response.data));
        } catch (err) {
            dispatch(addNewUserFail({ message: err.message }));
        }
    };
}