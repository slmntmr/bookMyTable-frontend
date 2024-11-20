"use client"; // Dosyanın istemci tarafında çalışmasını sağlar

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // next/router yerine next/navigation kullanıyoruz
import { login as loginService, register as registerService } from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const login = async (email, password) => {
    try {
      const userData = await loginService(email, password);
      setUser(userData);
      router.push('/dashboard/user');
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (username, email, password) => {
    try {
      const userData = await registerService(username, email, password);
      setUser(userData);
      router.push('/dashboard/user');
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/auth/login');
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
