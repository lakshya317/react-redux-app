export const SET_AUTH_USER = "SET_AUTH_USER"
export const REMOVE_AUTH_USER = "REMOVE_AUTH_USER"

export function setAuthUser(username){
    return {
        type: SET_AUTH_USER,
        user: username,
    }
}

export function removeAuthUser(){
    return {
        type: REMOVE_AUTH_USER
    }
}