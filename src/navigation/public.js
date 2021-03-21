import React from 'react';
import { Router } from '@reach/router';
import { publicRoutes } from './routes';
import { getStore } from '../common/reducer';
import storage from 'localforage';
import {NavbarComponent} from "../components/navbar";
const { store, persistor } = getStore(storage);


export const PublicRoutes = () => {
    return (
        <>
            {
                store.getState().auth.isAuthenticated?(
                    <div className="hidden"></div>
                ):(
                    <div>
                        <NavbarComponent/>
                        <Router>
                        {publicRoutes.map(Route=>(<Route.Component path={Route.to} />))}
                        </Router>
                    </div>
                )
            }

        </>
    );
};

