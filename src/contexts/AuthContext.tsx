
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

export interface User {
  id: string;
  email: string;
  name: string;
  requestsRemaining: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  decrementRequests: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data store - In a real app, this would be a database
const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@example.com',
    password: 'password123',
    name: 'Demo User',
    requestsRemaining: 3,
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('astrologyUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user data', error);
        localStorage.removeItem('astrologyUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('astrologyUser', JSON.stringify(userWithoutPassword));
      toast({
        title: 'Welcome back!',
        description: `Logged in as ${foundUser.name}`,
      });
      return true;
    } else {
      toast({
        title: 'Login failed',
        description: 'Invalid email or password',
        variant: 'destructive',
      });
      return false;
    }
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (MOCK_USERS.some(u => u.email === email)) {
      toast({
        title: 'Signup failed',
        description: 'Email already in use',
        variant: 'destructive',
      });
      return false;
    }

    // Create new user
    const newUser = {
      id: (MOCK_USERS.length + 1).toString(),
      email,
      password,
      name,
      requestsRemaining: 3,
    };
    
    MOCK_USERS.push(newUser);
    
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('astrologyUser', JSON.stringify(userWithoutPassword));
    
    toast({
      title: 'Account created!',
      description: `Welcome, ${name}!`,
    });
    
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('astrologyUser');
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out',
    });
  };

  const decrementRequests = () => {
    if (user && user.requestsRemaining > 0) {
      const updatedUser = {
        ...user,
        requestsRemaining: user.requestsRemaining - 1,
      };
      setUser(updatedUser);
      localStorage.setItem('astrologyUser', JSON.stringify(updatedUser));
      
      // Also update in our mock DB
      const userIndex = MOCK_USERS.findIndex(u => u.id === user.id);
      if (userIndex >= 0) {
        MOCK_USERS[userIndex].requestsRemaining -= 1;
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, decrementRequests }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
