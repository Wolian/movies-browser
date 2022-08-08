import {
  Image,
  Description,
  Title,
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

export const MovieTile = ({ poster, title, release, rate, votes }) => {
  return (
    <TileWrapper>
      <Image src={`${APIPhotoUrl}w500${poster}`} alt="" />
      <Content>
        <Description>
          <Title>{title}</Title>
          <Year>{release ? release.slice(0, 4) : ""}</Year>
          <Tags>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
            <Tag>Drama</Tag>
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
