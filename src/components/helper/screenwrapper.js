import React from 'react';
import {LeftNavbarComponent} from "../leftNavbar";
import {NavbarComponent} from "../navbar";
import storage from 'localforage';
import { getStore } from '../../common/reducer';
const { store } = getStore(storage);


export const ScreenWrapper = (props) => {
    const state=store.getState();
    const {children} = props;
    const { pathname } = window.location;
    return (
        <div className="bg-blue-100">
            <div className="  lg:flex ">
                {
                    (pathname.search("question")!==-1 || pathname==="/"||  pathname.search("documentation")!==-1 ||pathname.search("success")!==-1 || pathname.search("share")!==-1)?(
                        <div className="hidden">
                            <NavbarComponent/>
                        </div>
                    ):(

                    <div className=" lg:flex w-full">
                        <LeftNavbarComponent {...props} />
                    </div>
                    )
                }
                <div className="flex-1">{children}</div>
            </div>
        </div>

    );
};
