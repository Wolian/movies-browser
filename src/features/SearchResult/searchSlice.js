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

export const selectSearchState = (state) => state.search.resultSearch;
export const selectResultsState = (state) => selectSearchState(state).results;

export const { fetchSearch, setSearch } = searchSlice.actions;

export default searchSlice.reducer;
