import { AuthGuard } from "@/guards/auth-guard";
import type { FC } from "react";

export const withAuthGuard = <P extends object>(Component: FC<P>): FC<P> => {
  return function WithAuthGuard(props: P) {
    return (
      <AuthGuard>
        <Component {...props} />
      </AuthGuard>
    );
  };
};
