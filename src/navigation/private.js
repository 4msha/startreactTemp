import React from 'react';
import { Router,Redirect } from '@reach/router';
import { privateRoutes } from './routes';
import {ScreenWrapper} from "../components/helper/screenwrapper";
import { getStore } from '../common/reducer';
import storage from 'localforage';
const { store, } = getStore(storage);

export const PrivateRoutes = () => {
    return (
        <div className="bg-gray-400 ">{
            store.getState().auth.isAuthenticated?(
                <ScreenWrapper routes={privateRoutes} >
                    <Router>
                        {privateRoutes.map(Route=>(<Route.Component path={Route.to}  key={Route.to}/>))}
                    </Router>
                </ScreenWrapper>
            ):(
                <div className="hidden">
                </div>
            )
        }

        </div>
    );
};

