import {
    Wrapper,
    Poster,
    InfoWrapper,
    Name,
    SectionBirth,
    Birth,
    Date,
    Biography,
} from "./styled";

import { APIPhotoUrl } from "../../App/API";

export const PersonDetail = ({
    poster,
    name,
    biography,
    birthPlace,
    birthDate,
}) => {
    console.log(poster);
    return (
        <Wrapper>
            <Poster src={`${APIPhotoUrl}w342/${poster}`} alt="poster" />
            <InfoWrapper>
                <Name>{name}</Name>

                <SectionBirth>

                    <Birth>Date of birth:  <Date>{birthDate}</Date>  </Birth>

                    <Birth>Place of birth: <Date>{birthPlace}</Date> </Birth>

                </SectionBirth>

            </InfoWrapper>
            <Biography>{biography}</Biography>
        </Wrapper>
    );
};
