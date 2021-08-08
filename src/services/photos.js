import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const photos = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getAllPhotos: builder.query({
      query: () => '/photos',
    }),
  }),
});

export const { useGetAllPhotosQuery } = photos;

export default photos;
