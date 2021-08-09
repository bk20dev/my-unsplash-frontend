import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const photos = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    findAll: builder.query({
      query: () => '/photos',
    }),
    create: builder.mutation({
      query: (url, label) => ({
        url: '/photos',
        method: 'POST',
        body: { url, label },
      }),
    }),
  }),
});

export const { useFindAllQuery, useCreateMutation } = photos;

export default photos;
