import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default function baseQuery() {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,

    prepareHeaders: (headers) => {
      const token =
        localStorage.getItem("kSmart-token") || localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Accept", "application/json");
      headers.set("X-LANGUAGE", "en");

      return headers;
    },
  });

  return async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);

    // Global 401 handling
    if (result.error && result.error.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return result;
  };
}