import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { APIKey, APIUrl } from "../../App/API";
import { setMovies, fetchMovies } from "./moviesSlice";

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

export function* moviesSaga() {
  yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}
