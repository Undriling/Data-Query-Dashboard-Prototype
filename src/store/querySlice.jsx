import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    history: [],
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
    submitQuery: (state, action) => {
      state.loading = true;
      state.error = null;
      if (!state.history) state.history = [];
      state.history = [...state.history, action.payload];
    },

    querySuccess: (state, action) => {
      state.loading = false;
      state.results = action.payload;
    },

    queryError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitQuery, querySuccess, queryError } = querySlice.actions;
export default querySlice.reducer;
