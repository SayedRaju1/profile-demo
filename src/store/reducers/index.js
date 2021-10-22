// external imports
import { combineReducers } from 'redux';

// internal imports
import authReducer from './auth';

const reducers = combineReducers({
    auth: authReducer,
});

export default reducers;