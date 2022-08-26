import { SET_LOGGED_IN } from '../action/loggedIn';

export default function loggedIn(state = false, action) {
    switch (action.type) {
        case SET_LOGGED_IN:
            return action.loggedIn;
        default:
            return state;
    }
}
