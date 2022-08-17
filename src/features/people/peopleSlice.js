import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "popularPeople",
    initialState: {
        popularPeople: [],
    },
    reducers: {
        fetchPopularPeople: () => { },
        setPopularPeople: (state, { payload: popularPeople }) => {
            state.popularPeople = popularPeople;
        },
        fetchPeople: () => { },
        setPeopleCrewCast: (state, { payload: peopleCrewCast }) => {
            state.people = peopleCrewCast;
        },
    },
});

export const selectPopularPeopleState = (state) => state.popularPeople;
export const selectPeopleCrewCastState = (state) => state.people;

export const selectPopularPeople = (state) => selectPopularPeopleState(state).popularPeople;
export const selectPeopleCrewCast = (state) => selectPeopleCrewCastState(state).peopleCrewCast;

export const {
    fetchPopularPeople,
    setPopularPeople,
    fetchPeopleCrewCast,
    setPeopleCrewCast,
} = peopleSlice.actions;

export default peopleSlice.reducer;

