import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    people: [],
    popularMovies: [],
    genres: [],
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
    fetchGenres: () => {},
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectPeopleState = (state) => state.people;
export const selectPopularMoviesState = (state) => state.popularMovies;
export const selectGenresState = (state) => state.genres;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPopularMovies = (state) =>
  selectPopularMoviesState(state).popularMovies;
export const selectPopularMoviesTotalPages = (state) =>
  selectPopularMovies(state).total_pages;
export const selectGenres = (state) => selectGenresState(state).genres;

export const {
  setMovies,
  fetchMovies,
  setPeople,
  fetchPeople,
  setPopularMovies,
  fetchPopularMovies,
  setGenres,
  fetchGenres,
} = moviesSlice.actions;

export default moviesSlice.reducer;
