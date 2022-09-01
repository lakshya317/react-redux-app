import logger from './logger';
import thunk from 'redux-thunk';

const appEnv = process.env.REACT_APP_ENV;
var middleware;

if (appEnv === 'development' || appEnv === 'test') {
    middleware = [thunk, logger];
} else {
    middleware = [thunk];
}

export default middleware;
