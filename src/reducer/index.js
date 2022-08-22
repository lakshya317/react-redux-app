import { combineReducers } from "redux";
import authUser from "./authUser";
import loggedIn from "./loggedIn";
import loginError from "./loginError";

export default combineReducers({
    authUser,
    loggedIn,
    loginError
})