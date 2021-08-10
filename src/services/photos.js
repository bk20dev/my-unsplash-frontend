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
    delete: builder.mutation({
      query: (id) => ({
        url: `/photos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Photos'],
    }),
  }),
});

export const { useFindAllQuery, useCreateMutation, useDeleteMutation } = photos;

export default photos;
