import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage'
import reducer from './reducer';
import middleware from './middleware';

// Config
const persistStoreEncryptionKey = process.env.REACT_APP_PERSIST_STORE_ENCRYPTION_KEY
const persistConfigSecret = process.env.REACT_APP_PERSIST_CONFIG_SECRET

//Encryptor
const encryptor = encryptTransform({
  secretKey: persistStoreEncryptionKey,
  onError: function (error) {
    // Handle the error.
    console.error(error);
  },
})

const persistConfig = {
  transforms: [encryptor],
  storage,
  key: persistConfigSecret
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, middleware)
let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

