import { configureStore } from '@reduxjs/toolkit';
import photosApi from '../services/photos';
import search from '../services/search';

const store = configureStore({
  reducer: {
    photos: photosApi.reducer,
    search: search,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photosApi.middleware),
});

export default store;
