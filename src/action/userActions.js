import { setAuthUser } from "./authUser";
import API from "../utils/API";
import { setLoading } from "./loading";
import { setDisplayError } from "./displayError";

export function handleGetAuthProfile(id) {
    return (dispatch) => {
        dispatch(setLoading(true));
        API.getUser(id)
            .then((response) => {
                // eslint-disable-next-line
                if (response.id == id) {
                    let userData = {
                        id: response.id,
                        email: response.email,
                        first_name: response.first_name,
                        last_name: response.last_name,
                        avatar: response.avatar
                    }

                    dispatch(setAuthUser(userData));
                    dispatch(setLoading(false));
                }
                else {
                    throw new Error("Invalid Response!");
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(setLoading(false));
                dispatch(setDisplayError("Errors Connecting to Server!"));
            })
    }
}
