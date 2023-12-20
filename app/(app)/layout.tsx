"use client";

import { withAuthGuard } from "@/hoc/with-auth-guard";
import DashboardLayout from "@/layout/dashboard";



export default withAuthGuard(DashboardLayout);
