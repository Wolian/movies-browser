import axios from "axios";
import { delay, put, takeEvery } from "redux-saga/effects";
import { APIKey, APIUrl } from "../../App/API";
import {
  fetchPopularPeople,
  setPopularPeople,
  fetchPersonDetail,
  setPersonDetail,
  fetchPersonCastCrew,
  setPersonCastCrew,
  fetchErrorPopularPeople,
  fetchErrorPersonDetail,
} from "./peopleSlice";

function* fetchPopularPeopleHandler({ payload: page }) {
  try {
    yield delay(1500);
    const popularPeople = yield axios.get(
      `${APIUrl}person/popular?api_key=${APIKey}&language=en-US&page=${page}`
    );
    yield put(setPopularPeople(popularPeople.data));
  } catch (error) {
    yield put(fetchErrorPopularPeople("error"));
    yield console.error(error);
  }
}

function* fetchPersonDetailHandler({ payload: id }) {
  try {
    yield delay(1500);
    const personDetail = yield axios.get(
      `${APIUrl}person/${id}?api_key=${APIKey}`
    );
    yield put(setPersonDetail(personDetail.data));
  } catch (error) {
    yield put(fetchErrorPersonDetail("error"));
    yield console.error(error);
  }
}

function* fetchPersonCastCrewHandler({ payload: id }) {
  try {
    const personCastCrew = yield axios.get(
      `${APIUrl}person/${id}/movie_credits?api_key=${APIKey}`
    );
    yield put(setPersonCastCrew(personCastCrew.data));
  } catch (error) {
    yield console.error(error);
  }
}

export function* popularPeopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchPersonDetail.type, fetchPersonDetailHandler);
  yield takeEvery(fetchPersonCastCrew.type, fetchPersonCastCrewHandler);
}
