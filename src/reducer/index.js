import { combineReducers } from 'redux';
import authUser from './authUser';
import loggedIn from './loggedIn';
import displayError from './displayError';
import loading from './loading';
import { apiSlice } from '../utils/API/apiSlice';

export default combineReducers({
    authUser,
    loggedIn,
    displayError,
    loading,
    [apiSlice.reducerPath]: apiSlice.reducer
});
