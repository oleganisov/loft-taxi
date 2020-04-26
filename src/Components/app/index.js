import React, { useContext, useState } from 'react';
import { AuthContext } from '../authContext';
import Map from '../map';
import Profile from '../profile';
import Login from '../login';
import Signup from '../signup';
import Header from '../common/Header';

const App = () => {
    const [page, setPage] = useState('');
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;

    const renderPage = (page) => {
        if (!isLoggedIn) {
            switch (page) {
                case 'signup':
                    return <Signup handlerPage={setPage} />;
                default:
                    return <Login handlerPage={setPage} />;
            }
        } else {
            switch (page) {
                case 'profile':
                    return (
                        <>
                            <Header handlerPage={setPage} />
                            <Profile />
                        </>
                    );
                default:
                    return (
                        <>
                            <Header handlerPage={setPage} />
                            <Map />
                        </>
                    );
            }
        }
    };

    return renderPage(page);
};

export default App;
