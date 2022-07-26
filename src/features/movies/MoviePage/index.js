import { MovieCast } from "./MovieCast";
import { MoviePoster } from "./MoviePoster";
import { MovieTile } from "./MovieTile";
import { Container } from "./styled";

export const MoviePage = () => {
  return (
    <>
      <MoviePoster />
      <Container>
        <MovieTile />
        <MovieCast />
      </Container>
    </>
  );
};
