import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    people: [],
    popularMoves: [],
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
    fetchPopularMovies: () => {},
    setPopularMovies: (state, { payload: popularMovies }) => {
      state.popularMovies = popularMovies;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectPeopleState = (state) => state.people;
export const selectPopularMoviesState = (state) => state.popularMovies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPopularMovies = (state) =>
  selectPopularMoviesState(state).popularMovies;

export const {
  setMovies,
  fetchMovies,
  setPeople,
  fetchPeople,
  setPopularMovies,
  fetchPopularMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
