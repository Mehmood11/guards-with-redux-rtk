import { baseApi } from "../base-api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credential: any) => ({
        url: "/login",
        method: "POST",
        body: credential,
      }),
    }),
    signup: builder.mutation({
      query: (credential: any) => ({
        url: "/signup",
        method: "POST",
        body: credential,
      }),
    }),
  }),
});

export const {useLoginMutation, useSignupMutation} = authApi