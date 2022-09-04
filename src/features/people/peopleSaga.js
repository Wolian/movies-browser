import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { APIKey, APIUrl } from "../../App/API";
import { fetchPopularPeople, setPopularPeople } from "./peopleSlice";

function* fetchPopularPeopleHandler({ payload: page }) {
  try {
    const popularPeople = yield axios.get(
      `${APIUrl}person/popular?api_key=${APIKey}&language=en-US&page=${page}`
    );
    yield put(setPopularPeople(popularPeople.data));
  } catch (error) {
    yield console.log("error", error);
  }
}

export function* popularPeopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
}
