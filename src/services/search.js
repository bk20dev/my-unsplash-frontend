import { createSlice } from '@reduxjs/toolkit';

const search = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    update(_, action) {
      return action.payload;
    },
  },
});

export const { update } = search.actions;

export default search.reducer;
