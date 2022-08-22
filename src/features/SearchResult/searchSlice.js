import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    fetchSearch: () => {},
  },
});

export const { fetchSearch } = searchSlice.actions;

export default searchSlice.reducer;
