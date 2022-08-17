import { setAuthUser } from "./authUser";
import { setLoggedIn } from "./loggedIn";
import login from "../utils/api"


export default handleLogin = (username, password) => {
    return (dispatch) => {
        login(username,password)
        .then((response)=> {
            if( response.token){
                dispatch(setAuthUser("username"))
                dispatch(setLoggedIn(true))
            }
            else{
                throw new Error("Invalid Response!")
            }
        })
        .catch(()=>{
            console.log(err);
            dispatch(setAuthUser(""));
            dispatch(setLoggedIn(false));
        })
    }
}