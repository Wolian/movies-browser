import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePageNumber } from "../../../common/usePageNumber";
import { MovieTile } from "../../../common/MovieTile";
import { Pagination } from "../../../common/Pagination";
import { Loading } from "../../../common/Loading";
import { ErrorPage } from "../../../common/ErrorPage";
import {
  fetchGenres,
  fetchPopularMovies,
  selectGenres,
  selectLoadingPopularMovies,
  selectPopularMovies,
  selectPopularMoviesTotalPages,
} from "../moviesSlice";
import { MovieWrapper, Header, Container } from "./styled";
import { Wrapper } from "../../../common/Wrapper/styled";

export const MovieList = () => {
  const dispatch = useDispatch();
  const popular = useSelector(selectPopularMovies);
  const totalPage = useSelector(selectPopularMoviesTotalPages);
  const genres = useSelector(selectGenres);
  const loading = useSelector(selectLoadingPopularMovies);
  const page = usePageNumber();

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
    dispatch(fetchGenres());
  }, [page, dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = <Loading title={"please wait..."} />;
      break;
    case "success":
      render = (
        <>
          <Header>Popular movies</Header>
          <Container>
            {popular &&
              popular.results &&
              popular.results.map((movie) => (
                <MovieTile
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  release={movie.release_date}
                  genres={genres}
                  movieGenre={movie.genre_ids}
                  rate={movie.vote_average}
                  votes={movie.vote_count}
                />
              ))}
          </Container>
          <Pagination totalPage={totalPage} page={page === null ? 1 : page} />
        </>
      );
      break;
    default:
      render = <ErrorPage />;
  }

  return <Wrapper> <MovieWrapper>{render}</MovieWrapper> </Wrapper>;
};
