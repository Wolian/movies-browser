import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    resultSearch: [],
    loading: "loading",
  },
  reducers: {
    fetchSearch: (state) => {
      state.loading = "loading";
    },
    setSearch: (state, { payload: apiResults }) => {
      state.loading = "success";
      state.resultSearch = apiResults;
    },
    fetchErrorSearch: (state) => {
      state.loading = "error";
    },
  },
});

export const selectSearchState = (state) => state.search;
export const selectSearchResults = (state) =>
  selectSearchState(state).resultSearch;
export const selectResultsState = (state) => selectSearchResults(state).results;
export const selectTotalResults = (state) =>
  selectSearchResults(state).total_results;
export const selectSearchResultsTotalPages = (state) =>
  selectSearchResults(state).total_pages;
export const selectLoadingSearch = (state) => selectSearchState(state).loading;

export const { fetchSearch, setSearch, fetchErrorSearch } = searchSlice.actions;

export default searchSlice.reducer;
