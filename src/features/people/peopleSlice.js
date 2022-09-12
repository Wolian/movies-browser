import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    popularPeople: [],
    personDetail: [],
    personCastCrew: [],
    loading: true,
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.loading = true;
    },
    setPopularPeople: (state, { payload: popularPeople }) => {
      state.popularPeople = popularPeople;
      state.loading = false;
    },
    fetchPersonDetail: (state) => {
      state.loading = true;
    },
    setPersonDetail: (state, { payload: personDetail }) => {
      state.personDetail = personDetail;
      state.loading = false;
    },
    fetchPersonCastCrew: () => {},
    setPersonCastCrew: (state, { payload: personCastCrew }) => {
      state.personCastCrew = personCastCrew;
    },
  },
});

export const selectPopularPeopleState = (state) => state.popularPeople;
export const selectPersonDetailState = (state) => state.personDetail;
export const selectPersonCastCrewState = (state) => state.personCastCrew;

export const selectPopularPeople = (state) =>
  selectPopularPeopleState(state).popularPeople;
export const selectPopularPeopleResults = (state) =>
  selectPopularPeople(state).results;
export const selectPersonDetail = (state) =>
  selectPersonDetailState(state).personDetail;
export const selectPersonCastCrew = (state) =>
  selectPersonCastCrewState(state).personCastCrew;
export const selectPopularPeopleTotalPage = (state) =>
  selectPopularPeople(state).total_pages;
export const selectLoadingPopularPeople = (state) =>
  selectPopularPeopleState(state).loading;
export const selectLoadingPerson = (state) =>
  selectPersonDetailState(state).loading;

export const {
  fetchPopularPeople,
  setPopularPeople,
  fetchPersonDetail,
  setPersonDetail,
  fetchPersonCastCrew,
  setPersonCastCrew,
} = peopleSlice.actions;

export default peopleSlice.reducer;
