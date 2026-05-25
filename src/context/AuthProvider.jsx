import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
