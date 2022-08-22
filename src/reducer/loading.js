import { SET_LOADING } from '../action/loading'

export default function loading(state=true, action){
    switch(action.type){
        case SET_LOADING:
            return action.loading
        default:
            return state
    }
}