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
  MovieImage,
} from "./styled";
import vector from "../images/vector.png";
import { APIPhotoUrl } from "../../App/API";

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
  return (
    <TileWrapper>
      <MovieImage>
        <MovieLink to={`/moviepage/${id}`}>
          <Image src={`${APIPhotoUrl}w500${poster}`} alt="" />
        </MovieLink>
      </MovieImage>
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
