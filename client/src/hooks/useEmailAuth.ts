import { useState, useEffect, useCallback } from "react";
import { trpc } from "@/lib/trpc";

const TOKEN_KEY = "coursiv_auth_token";
const USER_KEY = "coursiv_user";

export interface EmailUser {
  id: number;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  quizAnswers: string | null;
  testModeEnabled: boolean | null;
  darkModeEnabled: boolean | null;
  onboardingCompleted: boolean | null;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date;
}

// Helper to get stored user from localStorage
function getStoredUser(): EmailUser | null {
  try {
    const stored = localStorage.getItem(USER_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to parse stored user:", e);
  }
  return null;
}

// Helper to store user in localStorage
function storeUser(user: EmailUser | null, token?: string) {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    }
  } else {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
  }
}

// Get stored token
export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function useEmailAuth() {
  const [user, setUser] = useState<EmailUser | null>(() => getStoredUser());
  const [isLoading, setIsLoading] = useState(true);

  const { data: userData, refetch } = trpc.emailAuth.me.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 0,
    cacheTime: 0,
  });

  const registerMutation = trpc.emailAuth.register.useMutation();
  const loginMutation = trpc.emailAuth.login.useMutation();
  const logoutMutation = trpc.emailAuth.logout.useMutation();
  const updateSettingsMutation = trpc.emailAuth.updateSettings.useMutation();

  useEffect(() => {
    // Always prefer server data over localStorage to get latest settings
    if (userData !== undefined) {
      setUser(userData as EmailUser | null);
      if (userData) {
        storeUser(userData as EmailUser);
      }
      setIsLoading(false);
    } else {
      // Fall back to localStorage while loading
      const storedUser = getStoredUser();
      if (storedUser) {
        setUser(storedUser);
      }
      setIsLoading(false);
    }
  }, [userData]);

  const register = useCallback(async (
    email: string,
    password: string,
    name?: string,
    quizAnswers?: Record<string, string>
  ) => {
    try {
      const result = await registerMutation.mutateAsync({
        email,
        password,
        name,
        quizAnswers,
      });
      // Result includes user and token
      const newUser = result.user || result;
      const token = result.token;
      
      setUser(newUser as EmailUser);
      storeUser(newUser as EmailUser, token);
      
      return newUser;
    } catch (error) {
      throw error;
    }
  }, [registerMutation]);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const result = await loginMutation.mutateAsync({ email, password });
      // Result includes user and token
      const loggedInUser = result.user || result;
      const token = result.token;
      
      setUser(loggedInUser as EmailUser);
      storeUser(loggedInUser as EmailUser, token);
      
      return loggedInUser;
    } catch (error) {
      throw error;
    }
  }, [loginMutation]);

  const logout = useCallback(async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      storeUser(null);
    }
  }, [logoutMutation]);

  const updateSettings = useCallback(async (settings: {
    testModeEnabled?: boolean;
    darkModeEnabled?: boolean;
    onboardingCompleted?: boolean;
  }) => {
    try {
      await updateSettingsMutation.mutateAsync(settings);
      // Refetch user data and update localStorage
      const result = await refetch();
      if (result.data) {
        storeUser(result.data as EmailUser);
        setUser(result.data as EmailUser);
      }
    } catch (error) {
      throw error;
    }
  }, [updateSettingsMutation, refetch]);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    register,
    login,
    logout,
    updateSettings,
    refetch,
  };
}
