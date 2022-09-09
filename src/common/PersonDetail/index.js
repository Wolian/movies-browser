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
import noImgPoster from "../../common/PersonTile/noPersonPhoto.png";

export const PersonDetail = ({
    poster,
    name,
    biography,
    birthPlace,
    birthDate,
}) => {
    return (
        <Wrapper>
            <Poster src={poster !== null ? `${APIPhotoUrl}w342/${poster}` : noImgPoster}
                alt="poster" />
            <InfoWrapper>
                <Name>{name}</Name>
                <SectionBirth>
                    <Birth>Date of birth:  <Date>{birthDate !== null ? birthDate : "no information"}</Date>  </Birth>
                    <Birth>Place of birth: <Date>{birthDate !== null ? birthPlace : "no information"}</Date> </Birth>
                </SectionBirth>
            </InfoWrapper>
            <Biography>{biography}</Biography>
        </Wrapper>
    );
};
