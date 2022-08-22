import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    resultSearch: [],
  },
  reducers: {
    fetchSearch: () => {},
    setSearch: (state, { payload: apiResults }) => {
      state.resultSearch = apiResults;
    },
  },
});

export const selectSearch = (state) => state.resultSearch;

export const { fetchSearch, setSearch } = searchSlice.actions;

export default searchSlice.reducer;
