import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handlerLogin = (e) => {
        const formId = e.target.id;

        setLoggedIn(true);

        if (formId === 'login_form') {
            setUsername(e.target.username.value);
            setPassword(e.target.password.value);
        } else {
            setUsername(null);
            setPassword(null);
        }
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
