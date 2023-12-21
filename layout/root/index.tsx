"use client";
import { store } from "@/store";
import { Provider } from "react-redux";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { AuthInitializer } from "@/hoc/with-auth-initializer";

const persistor = persistStore(store);

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthInitializer>{children}</AuthInitializer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default Layout;
