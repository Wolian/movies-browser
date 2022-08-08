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

export const MovieDetail = () => {
  return (
    <Wrapper>
      <Poster
        src="https://i.ibb.co/ZWTvJ2j/poster.png" /*póki co image z url i bez responsywności mobilnej, jak będzie api to to zmienię*/
        alt="poster"
      />
      <InfoWrapper>
        <Title>Mulan</Title>
        <Year>2020</Year>

        <SectionWrapper>
          <Section>
            <Production>Production:</Production>
            <Country>China, USA</Country>
          </Section>
          <Section>
            <RlsDate>Release date:</RlsDate>
            <Date>24.10.2020</Date>
          </Section>
        </SectionWrapper>

        <GenresWrapper>
          <Genre>Action</Genre>
          <Genre>Adventure</Genre>
          <Genre>Drama</Genre>
        </GenresWrapper>

        <Rating>
          <Icon />
          <Rate>
            7,8<Span>/ 10</Span>
          </Rate>
          <Votes>335 votes</Votes>
        </Rating>
      </InfoWrapper>
      <Description>
        A young Chinese maiden disguises herself as a male warrior in order to
        save her father. Disguises herself as a male warrior in order to save
        her father. A young Chinese maiden disguises herself as a male warrior
        in order to save her father.
      </Description>
    </Wrapper>
  );
};
