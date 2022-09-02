import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import moviesReducer from "../features/movies/moviesSlice";
import peopleReducer from "../features/people/peopleSlice";
import searchReduser from "../features/SearchResult/searchSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: moviesReducer,
    popularMovies: moviesReducer,
    genres: moviesReducer,
    popularPeople: peopleReducer,
    personDetail: peopleReducer,
  },
  
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
