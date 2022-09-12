import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    popularPeople: [],
    personDetail: [],
    personCastCrew: [],
    loading: "",
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.loading = "loading";
    },
    setPopularPeople: (state, { payload: popularPeople }) => {
      state.popularPeople = popularPeople;
      state.loading = "success";
    },
    fetchErrorPopularPeople: (state) => {
      state.loading = "error";
    },
    fetchPersonDetail: (state) => {
      state.loading = "loading";
    },
    setPersonDetail: (state, { payload: personDetail }) => {
      state.personDetail = personDetail;
      state.loading = "success";
    },
    fetchErrorPersonDetail: (state) => {
      state.loading = "error";
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
  fetchErrorPopularPeople,
  fetchPersonDetail,
  setPersonDetail,
  fetchErrorPersonDetail,
  fetchPersonCastCrew,
  setPersonCastCrew,
} = peopleSlice.actions;

export default peopleSlice.reducer;
