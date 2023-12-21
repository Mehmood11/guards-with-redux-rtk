import { setSessionStorage } from "@/utils/session-storage";

export const loginSuccess = (state: any, action: any): void => {
  const { data } = action.payload;
  
  state.accessToken = data.token;
  // state.refreshToken = data.refreshToken;
  state.user = data.user;
  state.isAuthenticated = true;

  setSessionStorage("accessToken", data.token);
  // setSessionStorage("refreshToken", data.refreshToken);
};

export const authMeSuccess = (state: any, action: any): void => {
  const { data } = action.payload;
  state.accessToken = data.token;
  // state.refreshToken = data.refreshToken;
  state.isAuthenticated = true;

  setSessionStorage("accessToken", data.token);
  // setSessionStorage("refreshToken", data.refreshToken);
};
