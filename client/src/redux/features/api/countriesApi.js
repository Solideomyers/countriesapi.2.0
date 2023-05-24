import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoint, baseQuery, setHeaders, headers } from "../config";
const { base, list } = endpoint.countries;
export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery,
  tagsTypes: ["Country"],
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: (isSorting) => ({
        url: `/${base}`,
        method: "GET",
        mode: "cors",
      //   transformResponse: (resp) => { 
      //     let sorted;
        
      //     if (isSorting === 'asc') {
      //       sorted = [...resp].sort((a, b) => a.name.localeCompare(b.name))
      //     }
      //     if (isSorting === 'desc') {
      //       sorted = [...resp].sort((a, b) => b.name.localeCompare(a.name))
      //     }
      //     return sorted
      // }
    })
    }),
    getCountryName: builder.query({
      query: ({ name }) => ({
        url: `/${base}/${name}`,
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
  useGetCountryNameQuery,
  useLazyGetCountryNameQuery,
  useGetCountryIdQuery,
  useLazyGetCountryIdQuery,
  useCreateCountryIdMutation,
  useUpdateCountryIdMutation,
} = countriesApi;
