import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handlerLogin = (e) => {
        setUsername(e.target.username.value);
        setPassword(e.target.password.value);
        setLoggedIn(true);
    };
    const handlerLogout = () => {
        setUsername(null);
        setPassword(null);
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                username,
                password,
                login: handlerLogin,
                logout: handlerLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export { AuthContext, AuthProvider };
