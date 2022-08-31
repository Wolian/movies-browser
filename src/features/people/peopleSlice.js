import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "popularPeople",
    initialState: {
        popularPeople: [],
        personDetail: [],
        personCastCrew: [],
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
        fetchPersonCastCrew: () => { },
        setPersonCastCrew: (state, {payload: personCastCrew}) => {
            state.personCastCrew = personCastCrew
        },
    },
});

export const selectPopularPeopleState = (state) => state.popularPeople;
export const selectPersonDetailState = (state) => state.personDetail;
export const selectPersonCastCrewState = (state) => state.personCastCrew;

export const selectPopularPeople = (state) => selectPopularPeopleState(state).popularPeople;
export const selectPersonDetail = (state) => selectPersonDetailState(state).personDetail;
export const selectPersonCastCrew = (state) => selectPersonCastCrewState(state).personCastCrew;

export const {
    fetchPopularPeople,
    setPopularPeople,
    fetchPersonDetail,
    setPersonDetail,
    fetchPersonCastCrew,
    setPersonCastCrew,
} = peopleSlice.actions;

export default peopleSlice.reducer;

