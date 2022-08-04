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
import poster from "../images/poster.png";
import vector from "../images/vector.png";

export const MovieTile = () => {
  return (
    <TileWrapper>
      <Image src={poster} alt="" />
      <Content>
        <Description>
          <Title>Mulan</Title>
          <Year>2020</Year>
          <Tags>
            <Tag>Action</Tag>
            <Tag>Adventure</Tag>
            <Tag>Drama</Tag>
          </Tags>
        </Description>
        <Rating>
          <Icon src={vector} alt="" />
          <Rate>7,8</Rate>
          <Votes>35 votes</Votes>
        </Rating>
      </Content>
    </TileWrapper>
  );
};
