import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoint, baseQuery, setHeaders, headers } from "../config";
const { base, list } = endpoint.countries;
export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery,
  tagsTypes: ["Country"],
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => ({
        url: `/${base}/${list}`,
        method: "GET",
        mode: "cors",
      }),
    }),
    getCountryId: builder.query({
      query: ({ id }) => ({
        url: `/${base}/${id}`,
      }),
    }),
    createActivityId: builder.mutation({
      query: (body) => ({
        url: `/${base}`,
        method: "POST",
        body: body,
        mode: "cors",
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
    updatePokemonId: builder.mutation({
      query: (body) => ({
        url: `/${base}/${body.id}`,
        method: "PUT",
        body: body,
        mode: "cors",
        prepareHeaders: () => setHeaders(headers),
      }),
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useLazyGetAllCountriesQuery,
  useGetCountryIdQuery,
  useLazyGetCountryIdQuery,
  useCreateCountryIdMutation,
  useUpdateCountryIdMutation,
} = countriesApi;
