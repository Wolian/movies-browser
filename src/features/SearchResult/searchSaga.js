import axios from "axios";
import { takeEvery } from "redux-saga/effects";
import { APIKey, APIUrl } from "../../App/API";

import { fetchSearch } from "./searchSlice";

function* fetchSearchHandler({ payload: query }) {
  try {
    console.log(query);
  } catch {
    console.log("Błąd");
  }
}

export function* searchSaga() {
  yield takeEvery(fetchSearch.type, fetchSearchHandler);
}
