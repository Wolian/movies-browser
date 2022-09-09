import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePageNumber } from "../../../common/usePageNumber";
import { MovieTile } from "../../../common/MovieTile";
import {
  fetchGenres,
  fetchPopularMovies,
  selectGenres,
  selectPopularMovies,
  selectPopularMoviesTotalPages,
} from "../moviesSlice";
import { Wrapper, Header, Container } from "./styled";
import Pagination from "../../../common/Pagination";

export const MovieList = () => {
  const dispatch = useDispatch();
  const popular = useSelector(selectPopularMovies);
  const totalPage = useSelector(selectPopularMoviesTotalPages);
  const genres = useSelector(selectGenres);
  const page = usePageNumber();

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
    dispatch(fetchGenres());
  }, [page, dispatch]);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
