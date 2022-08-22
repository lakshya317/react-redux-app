import { setAuthUser } from "./authUser";
import { setLoggedIn } from "./loggedIn";
import { setLoginError } from "./loginError";
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
                if(response.error){
                    console.log(response.error)
                    dispatch(setLoginError("Invalid Credentials!"))
                }
                else{
                    throw new Error("Invalid Response!")
                }
            }
        })
        .catch((err)=>{
            console.log(err);
            dispatch(setLoginError("Errors Connecting to Server!"));
            dispatch(setAuthUser(""));
            dispatch(setLoggedIn(false));
        })
    }
}

export function handleLogout(){
    return (dispatch) => {
        API.postLogout()
        .then((status) => {
            //Logout
            dispatch(setAuthUser(""));
            dispatch(setLoggedIn(false));
            if(status !== 200){
                dispatch(setLoginError("Errors Connecting to Server!"));
            }
            
        })
    }
}