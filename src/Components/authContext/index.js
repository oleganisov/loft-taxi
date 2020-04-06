import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [authorized, setAuthorized] = useState(false);

    const handlerLogin = () => {
        setAuthorized(true);
    };
    const handlerLogout = () => {
        setAuthorized(false);
    };

    return (
        <AuthContext.Provider
            value={{
                authorized,
                login: handlerLogin,
                logout: handlerLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
