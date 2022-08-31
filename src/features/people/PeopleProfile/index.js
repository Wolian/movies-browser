import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CastSection, CrewSection, Wrapper } from "./styled";
import { fetchPersonCastCrew, fetchPersonDetail, selectPersonCastCrew, selectPersonDetail } from "../peopleSlice";
import { PersonDetail } from "../../../common/PersonDetail";
import { MovieTile } from "../../../common/MovieTile";

export const PeopleProfile = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPersonDetail);
  const castCrew = useSelector(selectPersonCastCrew);

  useEffect(() => {
    dispatch(fetchPersonDetail(id));
    dispatch(fetchPersonCastCrew(id));
  }, [id, dispatch]);

  return (
    <Wrapper>
      <PersonDetail
        poster={person.profile_path}
        name={person.name}
        birthDate={person.birthday}
        birthPlace={person.place_of_birth}
        biography={person.biography}
      />
      <h2>Movies-cast ({castCrew.cast.length})</h2>
      <CastSection>
        {castCrew.cast?.map((cast) => (
          <MovieTile
            key={cast.id}
            id={cast.id}
            poster={cast.poster_path}
            title={cast.title}
            release={cast.release_date}
            genres={cast.genre_ids}
            movieGenre={cast.genre_ids}
            rate={cast.vote_average}
            votes={cast.vote_count}
          />
        ))}
      </CastSection>

    </Wrapper>
  );
};