import { setAuthUser } from "./authUser";
import { setLoggedIn } from "./loggedIn";
import { setDisplayError } from "./displayError";
import { setLoading } from "./loading";
import API from "../utils/API"
import { handleGetAuthProfile } from "./userActions";


export function handleLogin(username, password) {
    return (dispatch) => {
        dispatch(setLoading(true));
        API.postLogin(username, password)
            .then((response) => {
                if (response.token) {
                    dispatch(setLoggedIn(true));
                    dispatch(setLoading(false));
                    dispatch(handleGetAuthProfile(response.token.slice(-1)))
                    localStorage.setItem("token", response.token)
                }
                else {
                    if (response.error) {
                        console.log(response.error)
                        dispatch(setLoading(false));
                        dispatch(setDisplayError("Invalid Credentials!"))
                    }
                    else {
                        throw new Error("Invalid Response!")
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(setLoading(false));
                dispatch(setDisplayError("Errors Connecting to Server!"));
                dispatch(setAuthUser({}));
                dispatch(setLoggedIn(false));
            })
    }
}

export function handleLogout() {
    return (dispatch) => {
        dispatch(setLoading(true));
        API.postLogout()
            .then((status) => {
                //Logout
                dispatch(setAuthUser({}));
                dispatch(setLoggedIn(false));
                dispatch(setLoading(false));
                localStorage.removeItem("token");
                if (status !== 200) {
                    dispatch(setDisplayError("Errors Connecting to Server!"));
                }

            })
    }
}