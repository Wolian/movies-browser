import { MoviePeople } from "./MoviePeople";
import { MoviePoster } from "./MoviePoster";
import { MovieDetail } from "../../../common/MovieDetail";
import { Container } from "./styled";
import Pagination from "../../../common/Pagination";

export const MoviePage = () => {
  return (
    <>
      <MoviePoster />
      <Container>
        <MovieDetail />
        <MoviePeople title={"Cast"} />
        <MoviePeople title={"Crew"} />
        <Pagination />
      </Container>
    </>
  );
};
