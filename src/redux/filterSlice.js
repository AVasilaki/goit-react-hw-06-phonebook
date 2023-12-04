import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});
export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
