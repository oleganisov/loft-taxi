import React from 'react';
import PropTypes from 'prop-types';
import Map from './Components/map';
import Profile from './Components/profile';
import Login from './Components/login';
import Signup from './Components/signup';
import PrivateRoute from './PrivateRoute';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsLoggedIn } from './modules/auth';

const App = ({ isLoggedIn }) => {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/map" component={Map} isLoggedIn={isLoggedIn} />
            <PrivateRoute
                path="/profile"
                component={Profile}
                isLoggedIn={isLoggedIn}
            />
            <Redirect to="/" />
        </Switch>
    );
};
App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    isLoggedIn: getIsLoggedIn(state),
});

export default connect(mapStateToProps)(App);
