import { setAuthUser } from "./authUser";
import { setLoggedIn } from "./loggedIn";
import API from "../utils/api"


export function handleLogin(username, password) {
    return (dispatch) => {
        API.postLogin(username,password)
        .then((response)=> {
            if( response.token){
                dispatch(setAuthUser(username))
                dispatch(setLoggedIn(true))
            }
            else{
                throw new Error("Invalid Response!")
            }
        })
        .catch((err)=>{
            console.log(err);
            dispatch(setAuthUser(""));
            dispatch(setLoggedIn(false));
        })
    }
}

export function handleLogout(){
    return (dispatch) => {
        dispatch(setAuthUser(""));
        dispatch(setLoggedIn(false));
    }
}