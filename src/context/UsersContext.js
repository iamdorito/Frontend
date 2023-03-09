import { createContext, useState, useEffect } from "react";
// import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = async ({ children }) => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const value = {
    Users,
    setUsers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
