"use client";

import { withGuestGuard } from "@/hoc/with-guest-guard";
import AuthLayout from "@/layout/auth";

export default withGuestGuard(AuthLayout);
