import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { APIKey, APIUrl } from "../../App/API";
import {
  fetchPopularPeople,
  setPopularPeople,
  fetchPeopleCrewCast,
  setPeopleCrewCast,
} from "./peopleSlice";

function* fetchPopularPeopleHandler() {
  try {
    const popularPeople = yield axios.get(
      `${APIUrl}person/popular?api_key=${APIKey}`
    );
    yield put(setPopularPeople(popularPeople.data.results));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* fetchPeopleHandlerCrewCast({ payload: id }) {
  try {
    const people = yield axios.get(
      `${APIUrl}movie/${id}person/{person_id}?api_key=${APIKey}&language=en-US`
    );
    yield put(setPeopleCrewCast(people.data));
  } catch (error) {
    yield console.log("error", error);
  }
}

export function* popularPeopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchPeopleCrewCast.type, fetchPeopleHandlerCrewCast);
}