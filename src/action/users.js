export const SET_USERS = "SET_USERS"

export function setUsers(usersData){
    return {
        type: SET_USERS,
        usersData,
    }
}