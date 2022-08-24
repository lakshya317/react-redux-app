import { combineReducers } from "redux";
import authUser from "./authUser";
import loggedIn from "./loggedIn";
import displayError from "./displayError";
import loading from "./loading";
import users from "./users";

export default combineReducers({
    authUser,
    loggedIn,
    displayError,
    loading,
    users
})