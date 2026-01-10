import { trpc } from "@/lib/trpc";
import { useCallback } from "react";

export function useDemoAuth() {
  const { data: demoUser, isLoading, refetch } = trpc.demo.me.useQuery();
  const loginMutation = trpc.demo.login.useMutation({
    onSuccess: () => {
      refetch();
    },
  });
  const logoutMutation = trpc.demo.logout.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const login = useCallback(async () => {
    return loginMutation.mutateAsync();
  }, [loginMutation]);

  const logout = useCallback(async () => {
    return logoutMutation.mutateAsync();
  }, [logoutMutation]);

  return {
    demoUser,
    isLoading,
    isAuthenticated: !!demoUser,
    login,
    logout,
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
  };
}
