import React from "react";
import { Box, Stack } from "@mui/material";

const DashboardLayout = ({ children }: any) => {
  return (
    <Stack sx={{ height: "84vh" }}>
 
      <Box>{children}</Box>

    </Stack>
  );
};

export default DashboardLayout;
