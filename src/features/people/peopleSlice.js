import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    popularPeople: [],
  },
  reducers: {
    fetchPopularPeople: () => {},
    setPopularPeople: (state, { payload: popularPeople }) => {
      state.popularPeople = popularPeople;
    },
  },
});

export const selectPopularPeopleState = (state) => state.popularPeople;

export const selectPopularPeople = (state) =>
  selectPopularPeopleState(state).popularPeople;
export const selectPopularPeopleResults = (state) =>
  selectPopularPeople(state).results;
export const selectPopularPeopleTotalPage = (state) =>
  selectPopularPeople(state).total_pages;

export const { fetchPopularPeople, setPopularPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
