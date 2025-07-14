'use client';

import { useEffect, useState, createContext, useContext, ReactNode, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL?: string | null;
  role?: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: async () => {},
});

const protectedRoutes = ['/dashboard', '/admin'];
const authRoutes = ['/login', '/register'];
const adminEmail = 'admin@admin.com'; // Hardcoded admin email for this example

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const logout = useCallback(async () => {
    setLoading(true);
    await auth.signOut();
    router.push('/login');
  }, [router]);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const isAdmin = firebaseUser.email === adminEmail;
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          role: isAdmin ? 'admin' : 'user',
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) return;

    const path = pathname.toLowerCase();
    const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
    const isAdminRoute = path.startsWith('/admin');
    const isAuthRoute = authRoutes.includes(path);

    if (!user) { // If user is not logged in
        if(isProtectedRoute) {
            router.push('/login');
        }
    } else { // If user is logged in
        if (isAuthRoute) {
            router.push(user.role === 'admin' ? '/admin' : '/dashboard');
        }
        if (isAdminRoute && user.role !== 'admin') {
            router.push('/dashboard'); // Non-admin trying to access admin routes
        }
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
  if (isProtectedRoute && !user && !loading) {
    // This check prevents a flash of content while redirecting
    return (
      <div className="flex h-screen items-center justify-center">
          <Loader className="h-8 w-8 animate-spin" />
      </div>
  );
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
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
