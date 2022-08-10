import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MoviePeople } from "../../../common/MoviePeople";
import { MoviePoster } from "./MoviePoster";
import { MovieDetail } from "../../../common/MovieDetail";
import { Container } from "./styled";
import {
  fetchMovies,
  fetchPeople,
  selectMovies,
  selectPeople,
} from "../moviesSlice";

export const MoviePage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const people = useSelector(selectPeople);

  useEffect(() => {
    dispatch(fetchMovies(id));
    dispatch(fetchPeople(id));
  }, [id, dispatch]);

  return (
    <>
      <MoviePoster
        poster={movies.backdrop_path}
        title={movies.title}
        rate={movies.vote_average}
        count={movies.vote_count}
      />
      <Container>
        <MovieDetail
          poster={movies.poster_path}
          title={movies.title}
          release={movies.release_date}
          countries={movies.production_countries}
          genres={movies.genres}
          rate={movies.vote_average}
          count={movies.vote_count}
          description={movies.overview}
        />
        <MoviePeople title={"Cast"} items={people.cast} />
        <MoviePeople title={"Crew"} items={people.crew} />
      </Container>
    </>
  );
};
