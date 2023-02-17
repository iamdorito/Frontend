import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (data) => {
    return axios.post("http://localhost:3000/login", data);
  };

  const value = {
    currentUser,
    setCurrentUser,
    isAuthenticated,
    setIsAuthenticated,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
