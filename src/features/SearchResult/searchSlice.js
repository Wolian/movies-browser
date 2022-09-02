import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    resultSearch: [],
    loading: true,
  },
  reducers: {
    fetchSearch: (state) => {
      state.loading = true;
    },
    setSearch: (state, { payload: apiResults }) => {
      state.loading = false;
      state.resultSearch = apiResults;
    },
    fetchSearchError: (state) => {
      state.loading = false;
    },
  },
});

export const selectSearchState = (state) => state.search;
export const selectSearchResults = (state) =>
  selectSearchState(state).resultSearch;
export const selectResultsState = (state) => selectSearchResults(state).results;
export const selectTotalResults = (state) =>
  selectSearchResults(state).total_results;
export const selectLoadingSearch = (state) => selectSearchState(state).loading;

export const { fetchSearch, setSearch, fetchSearchError } = searchSlice.actions;

export default searchSlice.reducer;
