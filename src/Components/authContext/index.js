import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handlerLogin = (username, password) => {
        setUsername(username);
        setPassword(password);
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
                login: handlerLogin,
                logout: handlerLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
