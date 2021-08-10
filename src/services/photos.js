import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const photos = createApi({
  reducerPath: 'photos',
  tagTypes: ['Photos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    findAll: builder.query({
      query: () => '/photos',
      providesTags: ['Photos'],
    }),
    create: builder.mutation({
      query: ({ label, url }) => ({
        url: '/photos',
        method: 'POST',
        body: { label, url },
      }),
      invalidatesTags: ['Photos'],
    }),
  }),
});

export const { useFindAllQuery, useCreateMutation } = photos;

export default photos;
