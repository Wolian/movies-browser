import { HashRouter, Routes, Route } from "react-router-dom";
import { MoviePage } from "../features/movies/MoviePage";
import { MovieList } from "../features/movies/MovieList";
import { PeopleList } from "../features/people/PeopleList";
import { SearchResult } from "../features/SearchResult";
import Navigation from "../common/Navigation";
import ErrorPage from "../common/ErrorPage";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/moviepage/:id" element={<MoviePage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};
