import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    fetchMovies: () => {},
    setMovies: (state, { payload: movies }) => {
      state.movies = movies;
    },
  },
});

export const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;

export const { setMovies, fetchMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
