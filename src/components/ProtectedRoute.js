"use client"; // İstemci bileşeni olarak işaretler

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation'; // next/router yerine next/navigation
import { useEffect } from 'react';

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user || (requiredRole && user.role !== requiredRole)) {
        router.push('/auth/login');
      }
    }
  }, [user, loading, requiredRole, router]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return children;
}
