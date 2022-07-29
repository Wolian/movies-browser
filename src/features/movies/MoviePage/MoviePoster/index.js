import {
  Header,
  Wrapper,
  Image,
  MainInfo,
  Title,
  Rating,
  Icon,
  Rate,
  Votes,
  Span,
} from "./styled";

export const MoviePoster = () => {
  return (
    <Header>
      <Wrapper>
        <Image src="https://i.ibb.co/GxWnPn5/Poster-big.jpg" alt="" /*póki co image z hostingu, jak będzie API to zmienie */ />
        <MainInfo>
          <Title>Mulan</Title>
          <Rating>
            <Icon />
            <Rate>
              7,8<Span>/ 10</Span>
            </Rate>
            <Votes>335 votes</Votes>
          </Rating>
        </MainInfo>
      </Wrapper>
    </Header>
  );
};
