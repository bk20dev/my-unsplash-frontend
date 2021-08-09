import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const photos = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    findAll: builder.query({
      query: () => '/photos',
    }),
    create: builder.mutation({
      query: (data) => ({
        url: '/photos',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useFindAllQuery } = photos;

export default photos;
