import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "@/utils/local-storage";
import { clearSessionStorage } from "@/utils/session-storage";

const persistConfig = {
  key: "root",
  version: 1,
  whitelist: ["auth"],
  storage,
};

const appReducer = combineReducers({
  auth: AuthReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const rootReducer = (state: any, action: any): any => {
  console.log('action in store', action);
  
  // Clear all data in redux store to initial.
  if (action.type === "Auth/logout") {
    state = undefined;
    // Step 2: Before Logging Out
    const rememberMeData = getLocalStorage("rememberMe");

    // Step 3: Clear Local Storage (except "Remember Me" data)
    clearLocalStorage();
    clearSessionStorage();

    // Step 4: Restore the "Remember Me" Data
    if (rememberMeData) {
      setLocalStorage("rememberMe", rememberMeData);
    }
  }
  return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: enableDevTools as boolean,
  middleware: (defaultMiddleware: any) =>
    defaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = (): any => useReduxDispatch<AppDispatch>();
