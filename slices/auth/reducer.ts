import { authApi } from "@/services/auth/auth-api";
import { createSlice } from "@reduxjs/toolkit";
import { authMeSuccess, loginSuccess } from "./extra-reducer";

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
    logout: (state) => {
      state.isAuthenticated = initialState.isAuthenticated;
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, loginSuccess);
    builder.addMatcher(authApi.endpoints.refresh.matchFulfilled, authMeSuccess);
  },
});

export const { logout } = AuthSlice.actions;
export const { reducer: AuthReducer } = AuthSlice;
