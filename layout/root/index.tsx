"use client";
import { store } from "@/store";
import { Provider } from "react-redux";
import React from "react";

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Layout;
