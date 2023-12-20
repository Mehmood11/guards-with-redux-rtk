import { authApi } from "@/services/auth/auth-api";
import { createSlice } from "@reduxjs/toolkit";
import { loginSuccess } from "./extra-reducer";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: {},
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout: (state, payload: any) => {
      state.isAuthenticated = payload.action;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, loginSuccess);
  },
});

export const { logout } = AuthSlice.actions;
export const { reducer: AuthReducer } = AuthSlice;
