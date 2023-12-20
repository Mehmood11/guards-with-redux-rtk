import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import type { AnyAction } from "@reduxjs/toolkit";
import type { ThunkAction } from "redux-thunk";
import { AuthReducer } from "../slices/auth/reducer";
import { enableDevTools } from "@/config";
import type { TypedUseSelectorHook } from "react-redux";
import { baseApi } from "@/services/base-api";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  devTools: enableDevTools as boolean,
  middleware: (defaultMiddleware: any) =>
    defaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = (): any => useReduxDispatch<AppDispatch>();
