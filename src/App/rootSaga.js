import { all } from "redux-saga/effects";
import { moviesSaga } from "../features/movies/moviesSaga";
import { popularPeopleSaga } from "../features/people/peopleSaga";
 
function* rootSaga() {
  yield all([moviesSaga(),popularPeopleSaga()]);
}

export default rootSaga;
