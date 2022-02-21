// external imports
import { combineReducers } from "redux";

// internal imports
import authReducer from "./auth/auth";

// error modal reducer
import errorModalReducer from "./errorModal/errorModal";

import usersReducer from "./users/users";

const reducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
  errorModal: errorModalReducer,
});

export default reducers;
