import { all } from "redux-saga/effects";
import { moviesSaga } from "../features/movies/moviesSaga";
import { popularPeopleSaga } from "../features/people/peopleSaga";
import { searchSaga } from "../features/SearchResult/searchSaga";

function* rootSaga() {
  yield all([moviesSaga(), popularPeopleSaga(), searchSaga()]);
}

export default rootSaga;
