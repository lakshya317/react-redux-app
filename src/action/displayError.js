export const SET_DISPLAY_ERROR = "SET_DISPLAY_ERROR"
export const REMOVE_DISPLAY_ERROR = "REMOVE_DISPLAY_ERROR"

export function setDisplayError(error){
    return {
        type: SET_DISPLAY_ERROR,
        error: error,
    }
}

export function removeDisplayError(){
    return {
        type: REMOVE_DISPLAY_ERROR
    }
}