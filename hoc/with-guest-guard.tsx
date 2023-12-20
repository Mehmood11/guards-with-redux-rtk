import { GuestGuard } from "@/guards/guest-guard";
import type { FC } from "react";

export const withGuestGuard = <P extends object>(Component: FC<P>): FC<P> => {
  return function WithGuestGuard(props: P) {
    return (
      <GuestGuard>
        <Component {...props} />
      </GuestGuard>
    );
  };
};
