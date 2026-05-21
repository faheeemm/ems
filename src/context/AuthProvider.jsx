import React from "react";
import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
      <AuthContext.Provider value={"faheem"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;