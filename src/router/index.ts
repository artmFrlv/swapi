import React from 'react';

import Main from '../pages/Main';
import Basket from '../pages/Basket';
import Comparison from '../pages/Comparison';

export enum RouteNames {
    MAIN = '/',
    BASKET = '/basket',
    COMPARISON = '/comparison',
}

export interface IRoute {
    path: RouteNames;
    component: React.ComponentType;
    exact?: boolean;
}

export const routes: IRoute[] = [
    {
        path: RouteNames.MAIN,
        exact: true,
        component: Main,
    },
    {
        path: RouteNames.BASKET,
        exact: true,
        component: Basket,
    },
    {
        path: RouteNames.COMPARISON,
        exact: true,
        component: Comparison,
    }
];