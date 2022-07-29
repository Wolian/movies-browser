import { MovieCast } from "./MovieCast";
import { MoviePoster } from "./MoviePoster";
import { MovieTile } from "./MovieTile";
import { Container } from "./styled";
import Pagination from "../../../common/Pagination";

export const MoviePage = () => {
  return (
    <>
      <MoviePoster />
      <Container>
        <MovieTile />
        <MovieCast />
        <Pagination />
      </Container>
    </>
  );
};
