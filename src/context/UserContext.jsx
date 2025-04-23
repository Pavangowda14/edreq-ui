import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create a UserContext
const UserContext = createContext(null);

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")));

  const loginUser = (userData) => {
    setUser(userData);
    setIsAuth(true);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isAuth", JSON.stringify(true));
  };

  const logoutUser = async () => {
    try {
      await axios.post("https://edreq-backend.onrender.com/api/auth/logout", {}, { withCredentials: true });
    } catch (error) {
      console.error("Logout failed", error);
    }
    setUser(null);
    setIsAuth(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
  };
  return (
    <UserContext.Provider value={{ user, isAuth, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
