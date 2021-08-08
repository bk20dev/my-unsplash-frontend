import { configureStore } from '@reduxjs/toolkit';
import photosApi from '../services/photos';

const store = configureStore({
  reducer: {
    photos: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photosApi.middleware),
});

export default store;
