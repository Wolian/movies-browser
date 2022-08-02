import { MovieTile } from "../../../common/MovieTile";
import { Wrapper, Header, Container } from "./styled";


export const MovieList = () => {
    return (
        <Wrapper>
            <Header>Popular movies</Header>
            <Container>
                <MovieTile />
                <MovieTile />
                <MovieTile />
                <MovieTile />
                <MovieTile />
                <MovieTile />
                <MovieTile />
                <MovieTile />
            </Container>
        </Wrapper>
    );
};