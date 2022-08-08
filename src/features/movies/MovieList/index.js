import { MovieTile } from "../../../common/MovieTile";
import { Wrapper, Header, Container } from "./styled";

export const MovieList = () => {
  return (
    <Wrapper>
      <Header>Popular movies</Header>
      <Container>
        <MovieTile id={500} />
        <MovieTile id={400} />
        <MovieTile id={550} />
        <MovieTile id={200} />
        <MovieTile id={210} />
        <MovieTile id={300} />
        <MovieTile id={310} />
        <MovieTile id={400} />
      </Container>
    </Wrapper>
  );
};
