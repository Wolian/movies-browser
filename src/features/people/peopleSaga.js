import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { APIKey, APIUrl } from "../../App/API";
import {
  fetchPopularPeople,
  setPopularPeople,
  fetchPersonDetail,
  setPersonDetail,
  fetchPersonCastCrew,
  setPersonCastCrew,
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

function* fetchPersonDetailHandler({ payload:id }) {
  try {
    const personDetail = yield axios.get(
      `${APIUrl}person/${id}?api_key=${APIKey}`
    );
    yield put(setPersonDetail(personDetail.data));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* fetchPersonCastCrewHandler({ payload:id }) {
  try {
    const personCastCrew = yield axios.get(
      `${APIUrl}person/${id}/movie_credits?api_key=${APIKey}`
    );
    yield put(setPersonCastCrew(personCastCrew.data));
  } catch (error) {
    yield console.log("error", error);
  }
}

export function* popularPeopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchPersonDetail.type, fetchPersonDetailHandler);
  yield takeEvery(fetchPersonCastCrew.type, fetchPersonCastCrewHandler);
}