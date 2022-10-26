import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import reducer from '../reducer';
import logger from '../middleware/logger';
import { apiSlice } from '../utils/API/apiSlice';

// Config
const persistStoreEncryptionKey = process.env.REACT_APP_PERSIST_STORE_ENCRYPTION_KEY;
const persistConfigSecret = process.env.REACT_APP_PERSIST_CONFIG_SECRET;
const appEnv = process.env.REACT_APP_ENV;

//Encryptor
const encryptor = encryptTransform({
    secretKey: persistStoreEncryptionKey,
    onError: function (error) {
        // Handle the error.
        console.error(error);
    }
});

const persistConfig = {
    transforms: [encryptor],
    storage,
    key: persistConfigSecret,
    blacklist: [apiSlice.reducerPath]
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getdefaultMiddleware) => {
        const customizedMiddleware = getdefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        });

        if (appEnv === 'development' || appEnv === 'test') {
            return customizedMiddleware.concat(apiSlice.middleware, logger);
        }
        return customizedMiddleware.concat(apiSlice.middleware);
    }
});
export const persistor = persistStore(store);
