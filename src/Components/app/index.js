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
    const handlerSignup = (e) => {
        e.preventDefault();
        setNavigation('map');
    };
    const handlerSignupLink = (e) => {
        e.preventDefault();
        setNavigation('signup');
    };

    if (isLoggedIn) {
        switch (navigation) {
            case 'profile':
                return <Profile />;
            default:
                return <Map />;
        }
    } else {
        switch (navigation) {
            case 'signup':
                return (
                    <Signup
                        handlerSignup={handlerSignup}
                        handlerLoginLink={handlerLoginLink}
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
