import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL_BA = "http://localhost:3001";
export const baseQuery = fetchBaseQuery({ baseUrl: URL_BA });
export const endpoint = {
  countries: {
    base: "countries",
  },
  activities: {
    base: "activities",
    list: "list",
  },
};

const TOKEN = import.meta.env.TOKEN;

export const headers = {
  "Content-type": "application/json;",
  Authorization: `Bearer ${TOKEN}`,
};
export const setHeaders = (headers) => {
  headers["Content-type"] = "application/json;";
  headers["Authorization"] = `Bearer ${TOKEN}`;
  return headers;
};
