import axios from "axios";
import { delay, put, takeLatest } from "redux-saga/effects";
import { fetchSearch, setSearch } from "./searchSlice";
import { APIKey, APIUrl } from "../../App/API";

function* fetchSearchHandler({ payload: dataSearch }) {
  try {
    yield delay(2000);
    const search = yield axios.get(
      `${APIUrl}search/${dataSearch.typePage}?api_key=${APIKey}&language=en-US&query=${dataSearch.query}`
    );
    yield put(setSearch(search.data));
  } catch {
    console.log("Błąd");
  }
}

export function* searchSaga() {
  yield takeLatest(fetchSearch.type, fetchSearchHandler);
}
