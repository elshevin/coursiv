import { useState, useEffect, useCallback } from "react";
import { trpc } from "@/lib/trpc";

export interface EmailUser {
  id: number;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  quizAnswers: string | null;
  testModeEnabled: boolean | null;
  darkModeEnabled: boolean | null;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date;
}

export function useEmailAuth() {
  const [user, setUser] = useState<EmailUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { data: userData, refetch } = trpc.emailAuth.me.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const registerMutation = trpc.emailAuth.register.useMutation();
  const loginMutation = trpc.emailAuth.login.useMutation();
  const logoutMutation = trpc.emailAuth.logout.useMutation();
  const updateSettingsMutation = trpc.emailAuth.updateSettings.useMutation();

  useEffect(() => {
    if (userData !== undefined) {
      setUser(userData as EmailUser | null);
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
      const newUser = await registerMutation.mutateAsync({
        email,
        password,
        name,
        quizAnswers,
      });
      setUser(newUser as EmailUser);
      return newUser;
    } catch (error) {
      throw error;
    }
  }, [registerMutation]);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const loggedInUser = await loginMutation.mutateAsync({ email, password });
      setUser(loggedInUser as EmailUser);
      return loggedInUser;
    } catch (error) {
      throw error;
    }
  }, [loginMutation]);

  const logout = useCallback(async () => {
    try {
      await logoutMutation.mutateAsync();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, [logoutMutation]);

  const updateSettings = useCallback(async (settings: {
    testModeEnabled?: boolean;
    darkModeEnabled?: boolean;
  }) => {
    try {
      await updateSettingsMutation.mutateAsync(settings);
      // Refetch user data to get updated settings
      await refetch();
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
