import { BASE_URL } from "@/config";
import type { RootState } from "@/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TAGS: any = [];

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    console.log(getState());

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
