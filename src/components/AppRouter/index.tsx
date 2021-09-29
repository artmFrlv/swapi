import React, {FC} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {RouteNames, routes} from '../../router';

const AppRouter: FC = () => {
    return (
        <Switch>
            {routes.map(route =>
                <Route key={route.path} {...route}/>
            )}
            <Redirect to={RouteNames.MAIN} />
        </Switch>
    );
};

export default AppRouter;