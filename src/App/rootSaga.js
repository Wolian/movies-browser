import { all } from "redux-saga/effects";
import { moviesSaga } from "../features/movies/moviesSaga";

function* rootSaga() {
  yield all([moviesSaga()]);
}

export default rootSaga;
