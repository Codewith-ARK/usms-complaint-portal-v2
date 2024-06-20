'use client'
const { createContext, useState, useContext } = require("react");

const UserContext = createContext();

export function UserProvider({children}){
  const [user, setUser] = useState(null);
  const updateUser = (userInfo) =>{
    setUser(userInfo);
  }
  return(
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(){
  const context = useContext(UserContext);
  if(context === undefined){
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}