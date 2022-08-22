import { SET_LOGIN_ERROR, REMOVE_LOGIN_ERROR } from '../action/loginError'

export default function loginError(state="", action){
    switch(action.type){
        case SET_LOGIN_ERROR:
            return action.error

        case REMOVE_LOGIN_ERROR:
            return ""

        default:
            return state
    }
}