import {
  Image,
  Description,
  Title,
  MovieLink,
  Year,
  Tags,
  Tag,
  Icon,
  Rating,
  Rate,
  Votes,
  Content,
  TileWrapper,
} from "./styled";
import vector from "../images/vector.png";
import { APIPhotoUrl } from "../../App/API";
import noMoviePhoto from "./noMoviePhoto.png";

export const MovieTile = ({
  poster,
  title,
  release,
  rate,
  votes,
  genres,
  movieGenre,
  id,
}) => {
  const image = `${APIPhotoUrl}w500${poster}`;
  return (
    <TileWrapper>
      <MovieLink to={`/moviepage/${id}`}>
        <Image src={poster ? image : noMoviePhoto} alt="" />
      </MovieLink>
      <Content>
        <Description>
          <Title>
            <MovieLink to={`/moviepage/${id}`}>{title}</MovieLink>
          </Title>
          <Year>{release ? release.slice(0, 4) : ""}</Year>
          <Tags>
            {genres.map(
              (genre) =>
                movieGenre?.includes(genre.id) && (
                  <Tag key={genre.id}>{genre.name}</Tag>
                )
            )}
          </Tags>
        </Description>
        <Rating>
          <Icon src={vector} alt="" />
          <Rate>{rate}</Rate>
          <Votes>{votes} votes</Votes>
        </Rating>
      </Content>
    </TileWrapper>
  );
};
