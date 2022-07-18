import React, { useState } from "react";
import { loginWithGoogle } from "../services/firebase";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    const user = await loginWithGoogle();

    if (!user) {
      // TODO: Handle failed login
    }

    setUser(user);
  };

  const value = { user, login };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
