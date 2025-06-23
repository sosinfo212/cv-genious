'use client';

import { useEffect, useState, createContext, useContext, ReactNode, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';

// Define a simple User type for our mock auth
interface User {
  displayName: string | null;
  email: string | null;
  photoURL?: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (user: { email: string; displayName?: string }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

const protectedRoutes = ['/dashboard'];
const authRoutes = ['/login', '/register'];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // Simulate initial auth check
  useEffect(() => {
    setTimeout(() => {
      // In a real app, you might check localStorage here
      setLoading(false);
    }, 500);
  }, []);
  
  const login = useCallback(async (userInfo: { email: string; displayName?: string }) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
        email: userInfo.email,
        displayName: userInfo.displayName || 'Test User',
        photoURL: null,
    });
    setLoading(false);
    router.push('/dashboard');
  }, [router]);

  const logout = useCallback(async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser(null);
    setLoading(false);
    router.push('/login');
  }, [router]);


  useEffect(() => {
    if (loading) return;

    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
    const isAuthRoute = authRoutes.includes(pathname);

    if (isProtectedRoute && !user) {
      router.push('/login');
    }

    if (isAuthRoute && user) {
      router.push('/dashboard');
    }
  }, [loading, user, pathname, router]);

  if (loading) {
    return (
        <div className="flex h-screen items-center justify-center">
            <Loader className="h-8 w-8 animate-spin" />
        </div>
    );
  }
  
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  if (isProtectedRoute && !user) {
    return (
        <div className="flex h-screen items-center justify-center">
            <Loader className="h-8 w-8 animate-spin" />
        </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
