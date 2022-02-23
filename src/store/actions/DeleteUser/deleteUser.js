import * as actionTypes from "../../../constants/actionTypes";
import { deleteUser } from "../api";

const userDeleteStart = () => {
    return {
        type: actionTypes.DELETE_USER_START,
    };
};
const userDeleteSuccess = (data) => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
        data: data,
    };
};

const userDeleteFail = (error) => {
    return {
        type: actionTypes.DELETE_USER_FAIL,
        error: error,
    };
};

export const userDeleteAction = (userId) => {
    return async (dispatch) => {
        dispatch(userDeleteStart());
        try {
            let response = await deleteUser(userId);
            dispatch(userDeleteSuccess(response.data));
        } catch (err) {
            dispatch(userDeleteFail({ message: err.message }));
        }
    };
};
