import React, { useState } from 'react';
import {Link, navigate} from '@reach/router';
import storage from 'localforage';
import { getStore } from '../common/reducer';
import {useDispatch} from "react-redux";
import {privateRoutes} from "../navigation/routes";
import {RESET_STATE} from "../common/actions";
const { store } = getStore(storage);

export const LeftNavbarComponent = ({ routes }) => {
    const { pathname } = window.location;
    const [toggle,setToggle]=useState(false);
    const dispatch=useDispatch();
    const state=store.getState();
    const f=pathname.slice(1).toUpperCase();
    const [open, setOpen] = useState(f);
    const [sideBarLinks,setsideBarLinks]=useState(routes);
    const handleLogout=async()=>{
        // const data=await userLogout();
        // console.log({data});
        // dispatch({
        //     type: USER_LOGOUT
        // });
        dispatch({
            type: RESET_STATE
        });
        // try {
        //     await navigate("/")
        //     //window.location.reload();
        // } catch (err) {
        //     console.log(err);
        // }
    }
    return (
        <div className="  w-full lg:w-1/5"  >
                <div className="flex justify-between">
                    <Link to="/" className='flex flex-row items-center p-2 my-2 lg:my-2 md:my-0  '>
                        <img src=""  className="w-24 h-24 " />
                        <div className='flex flex-col align-start md:hidden lg:flex'>
                            <p
                                className='flex-none text-white text-xl font-bold '
                            >
                                event
                                <text className='text-blue-500  text-md font-normal '>Bot</text>
                            </p>
                            <text className='text-blue-600 text-xs'>get your events once</text>
                        </div>
                    </Link>
                    <div className=" lg:hidden flex items-center">
                        <button
                            onClick={()=>setToggle(!toggle)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-white  focus:outline-none focus:text-blue-900 focus:text-white'>

                            <svg className='block h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                            <svg className='hidden h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>
                </div>
            <div className={toggle?" lg:hidden   pt-4 pb-3 border-t   ":"hidden "}>
                <div className='flex items-center px-5 pb-1 border-b border-white mx-2'>
                    <div className='flex-shrink-0'>
                        <img
                            className='h-10 w-10 rounded-full'
                            src='data:image/png;base64,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'
                            alt='' />
                    </div>
                    <div className='ml-3'>
                        <p className='text-base font-medium text-blue-800'>Firdausia Fatima</p>
                        <p className='mt-1 text-sm font-medium text-blue-900'>firdausia1345@gmail.com</p>
                    </div>
                </div>
                <div className='mt-3 px-2 '>
                    {
                        privateRoutes.map(Route=>(
                            <div
                                className={`${open===Route.title?'  text-blue-200 rounded px-2':'px-2'}`}>
                                <Link
                                    onClick={()=>{
                                        setToggle(!toggle);
                                        setOpen(Route.title)}}
                                    to={Route.to}
                                    className='flex items-center'>
                                    <div
                                        className='mx-16 text-blue-800 text-sm font-semibold md:hidden lg:flex'
                                    >
                                        {Route.title}
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                    <button className=" mx-16 pl-2 text-blue-800 font-semibold text-sm" onClick={handleLogout}>LOGOUT</button>
                </div>
            </div>
                <div className="my-menu-content hidden lg:block">
                    <ul>
                        {
                            routes.map(Route=>(
                                <li
                                    className={`${open===Route.to?'bg-blue-100 rounded px-2':'px-2'}`}>
                                    <Link
                                        onClick={()=>{setOpen(Route.to)}}
                                        to={Route.to}
                                        className='flex items-center'>

                                        <div
                                            className={`${open===Route.to?' text-white font-semibold text-lg  rounded px-2':'px-2  text-blue-700 font-semibold text-lg  md:hidden lg:flex'}`}
                                        >
                                            {Route.title}
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <button className=" mx-4 text-blue-700 font-semibold text-lg  md:hidden lg:flex" onClick={handleLogout}>LOGOUT</button>
                </div>
        </div>
    );
};
