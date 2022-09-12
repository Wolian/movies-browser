import axios from "axios";
import { delay, put, takeEvery } from "redux-saga/effects";
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

function* fetchMoviesHandler({ payload: id }) {
  try {
    yield delay(1500);
    const movies = yield axios.get(`${APIUrl}movie/${id}?api_key=${APIKey}`);
    yield put(setMovies(movies.data));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* fetchPeopleHandler({ payload: id }) {
  try {
    const people = yield axios.get(
      `${APIUrl}movie/${id}/credits?api_key=${APIKey}&language=en-US`
    );
    yield put(setPeople(people.data));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* fetchPopularMoviesHandler({ payload: page }) {
  try {
    yield delay(1500);
    const popularMovies = yield axios.get(
      `${APIUrl}movie/popular?api_key=${APIKey}&language=en-US&page=${page}`
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
