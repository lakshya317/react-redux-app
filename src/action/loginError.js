export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR"
export const REMOVE_LOGIN_ERROR = "REMOVE_LOGIN_ERROR"

export function setLoginError(error){
    return {
        type: SET_LOGIN_ERROR,
        error: error,
    }
}

export function removeLoginError(){
    return {
        type: REMOVE_LOGIN_ERROR
    }
}