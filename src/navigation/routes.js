import React from 'react';
import {Home} from "../screens/home";
import {Dashboard} from "../screens/dashboard";
import {SignIn} from "../screens/signin";
export const publicRoutes=[
    {
        to: '/',
        title: 'Home',
        icon: 'view-list',
        Component: () => <Home />,
    },
    {
        to: '/signin',
        title: 'SIGNIN',
        icon: 'view-list',
        Component: () => <SignIn />,
    },
];


export const privateRoutes = [
    {
        to: '/dashboard',
        title: 'DASHBOARD',
        icon: 'view-list',
        Component: () => <Dashboard />,
    },
];
