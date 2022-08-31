import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import moviesReducer from "../features/movies/moviesSlice";
import rootSaga from "./rootSaga";
import peopleReducer from "../features/people/peopleSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: moviesReducer,
    popularMovies: moviesReducer,
    genres: moviesReducer,
    popularPeople: peopleReducer,
    personDetail: peopleReducer,
    personCastCrew: peopleReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
