import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, isLoggedIn, ...props }) => {
    return (
        <Route
            {...props}
            render={(routeProps) =>
                isLoggedIn ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default PrivateRoute;
