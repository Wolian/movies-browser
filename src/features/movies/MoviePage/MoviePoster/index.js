import { APIPhotoUrl } from "../../../../App/API";
import { Wrapper } from "../../../../common/Wrapper/styled";
import {
  Header,
  PosterWrapper,
  Image,
  MainInfo,
  Title,
  Rating,
  Icon,
  Rate,
  Votes,
  Span,
} from "./styled";

export const MoviePoster = ({ poster, title, rate, count }) => {
  return (
    <Wrapper>
      <Header>
      <PosterWrapper>
        <Image src={`${APIPhotoUrl}original/${poster}`} alt="" />
        <MainInfo>
          <Title>{title}</Title>
          <Rating>
            <Icon />
            <Rate>
              {rate}
              <Span>/ 10</Span>
            </Rate>
            <Votes>{count} votes</Votes>
          </Rating>
        </MainInfo>
      </PosterWrapper>
    </Header>
    </Wrapper>
  );
};
