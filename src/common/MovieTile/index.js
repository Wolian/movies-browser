import {
  Wrapper,
  Poster,
  InfoWrapper,
  Title,
  Year,
  SectionWrapper,
  Section,
  Production,
  Country,
  RlsDate,
  Date,
  GenresWrapper,
  Genre,
  Rating,
  Icon,
  Rate,
  Span,
  Votes,
  Description,
} from "./styled";

import { APIPosterUrl } from "../../App/API";

export const MovieTile = ({
  poster,
  title,
  release,
  countries,
  genres,
  rate,
  count,
  description,
}) => {
  return (
    <Wrapper>
      <Poster src={`${APIPosterUrl}w342/${poster}`} alt="poster" />
      <InfoWrapper>
        <Title>{title}</Title>
        <Year>{release ? release.slice(0, 4) : ""}</Year>

        <SectionWrapper>
          <Section>
            <Production>Production:</Production>
            {countries &&
              countries.map((country) => (
                <Country key={country.iso_3166_1}>
                  {country.name}
                  {", "}
                </Country>
              ))}
          </Section>
          <Section>
            <RlsDate>Release date:</RlsDate>
            <Date>24.10.2020</Date>
          </Section>
        </SectionWrapper>

        <GenresWrapper>
          {genres &&
            genres.map((genre) => <Genre key={genre.id}>{genre.name}</Genre>)}
        </GenresWrapper>

        <Rating>
          <Icon />
          <Rate>
            {rate}
            <Span>/ 10</Span>
          </Rate>
          <Votes>{count} votes</Votes>
        </Rating>
      </InfoWrapper>
      <Description>{description}</Description>
    </Wrapper>
  );
};
