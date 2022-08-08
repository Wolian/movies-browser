import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { APIKey, APIUrl } from "../../App/API";
import {
  setMovies,
  fetchMovies,
  setPeople,
  fetchPeople,
  setPopularMovies,
  fetchPopularMovies,
  fetchGenres,
  setGenres,
} from "./moviesSlice";

function* fetchMoviesHandler() {
  try {
    const movies = yield axios.get(
      `${APIUrl}movie/550?api_key=${APIKey}`
      //"https://api.themoviedb.org/3/search/movie?api_key=4637368ad2293e793c00648491a244a5&query=Mulan"
    );
    yield put(setMovies(movies.data));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* fetchPeopleHandler() {
  try {
    const people = yield axios.get(
      `${APIUrl}movie/550/credits?api_key=${APIKey}&language=en-US`
    );
    yield put(setPeople(people.data));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* fetchPopularMoviesHandler() {
  try {
    const popularMovies = yield axios.get(
      `${APIUrl}movie/popular/?api_key=${APIKey}&language=en-US&page=1`
    );
    yield put(setPopularMovies(popularMovies.data));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* fetchGenresHandler() {
  try {
    const response = yield axios.get(
      `${APIUrl}genre/movie/list?api_key=${APIKey}&language=en-US`
    );
    yield put(setGenres(response.data.genres));
  } catch (error) {
    yield console.log("error", error);
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
  yield takeEvery(fetchPeople.type, fetchPeopleHandler);
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchGenres.type, fetchGenresHandler);
}
