import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import storage from 'localforage';
import { PersistGate } from 'redux-persist/integration/react';
import './tailwind.output.css';

import { getStore } from './common/reducer';

import { getStorage } from './common/storage/';
import { css } from './styles';

import { PrivateRoutes } from './navigation/private';
import { PublicRoutes } from './navigation/public';


const { store, persistor } = getStore(storage);

window.persistor = persistor;
window.storage = getStorage(window.localStorage);
window.css = css;


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                <switch>
                    <PrivateRoutes />
                    <PublicRoutes />
                </switch>
            </PersistGate>
        </Provider>
    );
}

export default App;
