import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";

import toast from "react-hot-toast";
import { SplashScreen } from "@/components/splash-screen";
import { useLazyRefreshQuery } from "@/services/auth/auth-api";
import { useDispatch, useSelector } from "@/store";
import { logout } from "@/slices/auth/reducer";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthInitializer(props: AuthProviderProps): JSX.Element {
  const [isInitialized, setIsInitialized] = useState(false);

  const {
    auth: { refreshToken, accessToken, user },
  }: any = useSelector((state: { auth: any }) => state);
  const [refreshQuery, { isLoading }] = useLazyRefreshQuery();
  const { children } = props;
  const dispatch = useDispatch();

  const initialize = useCallback(async (): Promise<void> => {
    if (refreshToken && accessToken) {
      try {
        await refreshQuery({
          body: {
            userId: user?.userId,
            refreshToken,
          },
        }).unwrap();
      } catch (error: any) {
        toast.error(error?.data?.message || "Something Went Wrong");
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    void initialize();
  }, [initialize]);

  if (isLoading || !isInitialized) {
    return <SplashScreen>Loading...</SplashScreen>;
  }

  return <>{children}</>;
}
