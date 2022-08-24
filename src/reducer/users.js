import { SET_USERS } from "../action/users";

const initialState = {
    "page": -1,
    "per_page": -1,
    "total": -1,
    "total_pages": -1,
    "data": []
}

export default function users(state=initialState, action){
    switch(action.type){
        case SET_USERS:
            return action.usersData
        default:
            return state
    }
}