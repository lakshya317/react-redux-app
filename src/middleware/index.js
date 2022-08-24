import logger from "./logger";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const appEnv = process.env.REACT_APP_ENV;
var middleware

if(appEnv === "development" || appEnv === "test"){
    middleware = applyMiddleware(thunk, logger);
}
else{
    middleware = applyMiddleware(thunk);
}

export default middleware