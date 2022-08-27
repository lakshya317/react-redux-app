import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import reducer from '../reducer';
import middleware from '../middleware';

// Config
const persistStoreEncryptionKey = process.env.REACT_APP_PERSIST_STORE_ENCRYPTION_KEY;
const persistConfigSecret = process.env.REACT_APP_PERSIST_CONFIG_SECRET;

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
    key: persistConfigSecret
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
