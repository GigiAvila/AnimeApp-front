import { createContext, useMemo, useState } from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [user, setLocalStorageUser] = useLocalStorage("user", null);



  const login = async (data) => {
    setLocalStorageUser(data);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setLocalStorageUser(null);
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };




  const value = useMemo(() => {
    return {
      isLoggedIn,
      user,
      setLocalStorageUser,
      login,
      logout,

    };
  }, [user, isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}