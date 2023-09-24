// Authentication context

import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loginState, setLoginState] = useState(false);

    const value = { loginState, setLoginState };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };
