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
    refresh: builder.query({
      query: () => ({
        url: "/refresh",
        method: "GET"
      }),
    }),
  }),
});

export const {useLoginMutation, useSignupMutation, useLazyRefreshQuery} = authApi