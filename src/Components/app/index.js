import React, { useContext, useState } from 'react';
import { AuthContext } from '../authContext';
import Map from '../map';
import Profile from '../profile';
import Login from '../login';
import Signup from '../signup';

const App = () => {
    const [navigation, setNavigation] = useState('');
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;

    const handlerLoginLink = (e) => {
        e.preventDefault();
        setNavigation('login');
    };
    const handlerSignupLink = (e) => {
        e.preventDefault();
        setNavigation('signup');
    };
    const handlerNavigation = (value) => {
        setNavigation(value);
    };

    if (isLoggedIn) {
        switch (navigation) {
            case 'profile':
                return <Profile handlerNavigation={handlerNavigation} />;
            default:
                return <Map handlerNavigation={handlerNavigation} />;
        }
    } else {
        switch (navigation) {
            case 'signup':
                return (
                    <Signup
                        handlerLoginLink={handlerLoginLink}
                        handlerNavigation={setNavigation}
                    />
                );
            default:
                return (
                    <Login
                        handlerSignupLink={handlerSignupLink}
                        handlerNavigation={setNavigation}
                    />
                );
        }
    }
};

export default App;
