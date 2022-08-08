import { HashRouter, Routes, Route } from "react-router-dom";
import { MoviePage } from "../features/movies/MoviePage";
import { MovieList } from "../features/movies/MovieList";
import Navigation from "../common/Navigation";

export const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/moviepage" element={<MoviePage />} />
      </Routes>
    </HashRouter>
  );
};
