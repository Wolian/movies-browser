import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    people: [],
    id: 0,
  },
  reducers: {
    fetchMovies: () => {},
    setMovies: (state, { payload: movies }) => {
      state.movies = movies;
    },
    fetchPeople: () => {},
    setPeople: (state, { payload: people }) => {
      state.people = people;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectPeopleState = (state) => state.people;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPeople = (state) => selectPeopleState(state).people;

export const { setMovies, fetchMovies, setPeople, fetchPeople } =
  moviesSlice.actions;

export default moviesSlice.reducer;
