import { SET_AUTH_USER, REMOVE_AUTH_USER } from '../action/authUser'

export default function authUser(state={}, action){
    switch(action.type){
        case SET_AUTH_USER:
            return action.userData

        case REMOVE_AUTH_USER:
            return ""

        default:
            return state
    }
}