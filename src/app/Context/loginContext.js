"use client"

import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin(){
  const context = useContext(LoginContext);
  if(context === undefined){
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
}

export default LoginContext;