import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "popularPeople",
    initialState: {
        popularPeople: [],
        personDetail: [],
    },
    reducers: {
        fetchPopularPeople: () => { },
        setPopularPeople: (state, { payload: popularPeople }) => {
            state.popularPeople = popularPeople;
        },
        fetchPersonDetail: () => { },
        setPersonDetail: (state, {payload: personDetail}) => {
            state.personDetail = personDetail
        },
        fetchPeopleCrewCast: () => { },
        setPeopleCrewCast: (state, { payload: peopleCrewCast }) => {
            state.people = peopleCrewCast;
        },
    },
});

export const selectPopularPeopleState = (state) => state.popularPeople;
export const selectPeopleCrewCastState = (state) => state.people;
export const selectPersonDetailState = (state) => state.personDetail;

export const selectPopularPeople = (state) => selectPopularPeopleState(state).popularPeople;
export const selectPeopleCrewCast = (state) => selectPeopleCrewCastState(state).peopleCrewCast;
export const selectPersonDetail = (state) => selectPersonDetail(state).personDetail;

export const {
    fetchPopularPeople,
    setPopularPeople,
    fetchPersonDetail,
    setPersonDetail,
    fetchPeopleCrewCast,
    setPeopleCrewCast,
} = peopleSlice.actions;

export default peopleSlice.reducer;

