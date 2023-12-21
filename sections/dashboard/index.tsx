import { logout } from "@/slices/auth/reducer";
import { useDispatch } from "@/store";
import { Button } from "@mui/material";
import React from "react";

const DashboardSection = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      DashboardSection
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
};

export default DashboardSection;
