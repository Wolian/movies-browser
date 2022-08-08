import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../../common/MovieTile";
import { fetchPopularMovies, selectPopularMovies } from "../moviesSlice";
import { Wrapper, Header, Container } from "./styled";

export const MovieList = () => {
  const dispatch = useDispatch();
  const popular = useSelector(selectPopularMovies);

  console.log(popular);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);
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
              rate={movie.vote_average}
              votes={movie.vote_count}
            />
          ))}
      </Container>
    </Wrapper>
  );
};
