import { SET_DISPLAY_ERROR, REMOVE_DISPLAY_ERROR } from '../action/displayError';

export default function displayError(state = '', action) {
    switch (action.type) {
        case SET_DISPLAY_ERROR:
            return action.error;

        case REMOVE_DISPLAY_ERROR:
            return '';

        default:
            return state;
    }
}
