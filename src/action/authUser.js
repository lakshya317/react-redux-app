export const SET_AUTH_USER = "SET_AUTH_USER"
export const REMOVE_AUTH_USER = "REMOVE_AUTH_USER"

export function setAuthUser(userData){
    return {
        type: SET_AUTH_USER,
        userData: userData,
    }
}

export function removeAuthUser(){
    return {
        type: REMOVE_AUTH_USER
    }
}