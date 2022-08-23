import { setAuthUser } from "./authUser";
import { setLoggedIn } from "./loggedIn";
import { setDisplayError } from "./displayError";
import { setLoading } from "./loading";
import API from "../utils/api"


export function handleLogin(username, password) {
    return (dispatch) => {
        dispatch(setLoading(true));
        API.postLogin(username,password)
        .then((response)=> {
            if( response.token){
                dispatch(setAuthUser(username));
                dispatch(setLoggedIn(true));
                dispatch(setLoading(false));
            }
            else{
                if(response.error){
                    console.log(response.error)
                    dispatch(setLoading(false));
                    dispatch(setDisplayError("Invalid Credentials!"))
                }
                else{
                    throw new Error("Invalid Response!")
                }
            }
        })
        .catch((err)=>{
            console.log(err);
            dispatch(setLoading(false));
            dispatch(setDisplayError("Errors Connecting to Server!"));
            dispatch(setAuthUser(""));
            dispatch(setLoggedIn(false));
        })
    }
}

export function handleLogout(){
    return (dispatch) => {
        dispatch(setLoading(true));
        API.postLogout()
        .then((status) => {
            //Logout
            dispatch(setAuthUser(""));
            dispatch(setLoggedIn(false));
            dispatch(setLoading(false));
            if(status !== 200){
                dispatch(setDisplayError("Errors Connecting to Server!"));
            }
            
        })
    }
}