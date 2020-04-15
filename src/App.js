import React from 'react';
import Map from './components/map';
import Profile from './components/profile';
import Login from './components/login';
import Signup from './components/signup';
import PrivateRoute from './PrivateRoute';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsLoggedIn } from './modules/auth';

const App = ({ isLoggedIn }) => {
    return (
        <Switch>
            <PrivateRoute path="/map" component={Map} isLoggedIn={isLoggedIn} />
            <PrivateRoute
                path="/profile"
                component={Profile}
                isLoggedIn={isLoggedIn}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/map" />
        </Switch>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: getIsLoggedIn(state),
});

export default connect(mapStateToProps)(App);
