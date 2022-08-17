import authUser from "./authUser";
import loggedIn from "./loggedIn";
import { combineReducers } from "redux";

export default combineReducers({
    authUser,
    loggedIn
})