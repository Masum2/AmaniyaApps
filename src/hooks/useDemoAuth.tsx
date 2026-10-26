import React, { createContext, useContext, useState } from 'react';

type AuthContextValue = {
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type DemoAuthProviderProps = {
  children: React.ReactNode;
};

const DemoAuthProvider = ({ children }: DemoAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email: string, password: string) => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useDemoAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useDemoAuth must be used inside DemoAuthProvider');
  }

  return context;
};

export { DemoAuthProvider, useDemoAuth };