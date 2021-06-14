import React from 'react';
import {LeftNavbarComponent} from "../leftNavbar";

export const ScreenWrapper = (props) => {
    const {children} = props;
    const { pathname } = window.location;
    console.log(pathname);
    const items=pathname.split("/");
    console.log({items});
    return (
        <div className="bg-blue-100">
            <div className="  ">
                {
                    (pathname.search("response")!==-1 || pathname.search("candidate")!==-1 || pathname.search("documentation")!==-1 ||pathname.search("success")!==-1 || pathname.search("question")!==-1 )?(
                        <div className="hidden">
                        </div>
                    ):(

                        <div className=" ">
                            <LeftNavbarComponent {...props} />
                        </div>
                    )
                }

                <div className="flex-1">{children}</div>
            </div>
        </div>

    );
};
