import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MoviePeople } from "../../../common/MoviePeople";
import { Loading } from "../../../common/Loading";
import { MovieDetail } from "../../../common/MovieDetail";
import { ErrorPage } from "../../../common/ErrorPage";
import { MoviePoster } from "./MoviePoster";
import {
  fetchMovies,
  fetchPeople,
  selectLoadingMovie,
  selectMovies,
  selectPeople,
} from "../moviesSlice";
import { Center, Container } from "./styled";

export const MoviePage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const people = useSelector(selectPeople);
  const loading = useSelector(selectLoadingMovie);
  console.log(loading);

  useEffect(() => {
    dispatch(fetchMovies(id));
    dispatch(fetchPeople(id));
  }, [id, dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = (
        <Center>
          <Loading title={"please wait..."} />
        </Center>
      );
      break;
    case "success":
      render = (
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
      break;
    default:
      render = <ErrorPage />;
  }

  return render;
};
