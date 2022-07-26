import {
  BackgroundShadow,
  Wrapper,
  Image,
  MainInfo,
  Header,
  Rating,
  Icon,
  Rate,
  Votes,
  Span,
} from "./styled";

export const MoviePoster = () => {
  return (
    <BackgroundShadow>
      <Wrapper>
        <Image src="https://i.ibb.co/GxWnPn5/Poster-big.jpg" alt="" /*póki co image z hostingu, jak będzie API to zmienie */ />
        <MainInfo>
          <Header>Mulan</Header>
          <Rating>
            <Icon />
            <Rate>
              7,8<Span>/ 10</Span>
            </Rate>
            <Votes>335 votes</Votes>
          </Rating>
        </MainInfo>
      </Wrapper>
    </BackgroundShadow>
  );
};
