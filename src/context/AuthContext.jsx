import { useState, useContext, createContext, useEffect } from 'react';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  
const [user, setUser] = useState(getUser());

  function getUser(){
    const temp = localStorage.getItem('user');
    const savedUser = JSON.parse(temp);
    return savedUser || '';
  }

  useEffect(() => {
    // storing user state
    // console.log(user);
    const temp = JSON.stringify(user);
    localStorage.setItem('user', temp);
  }, [user]);


  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
