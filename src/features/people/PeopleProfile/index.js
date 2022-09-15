import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPersonCastCrew,
  fetchPersonDetail,
  selectLoadingPerson,
  selectPersonCastCrew,
  selectPersonDetail,
} from "../peopleSlice";
import { PersonDetail } from "../../../common/PersonDetail";
import { MovieTile } from "../../../common/MovieTile";
import { fetchGenres, selectGenres } from "../../movies/moviesSlice";
import { Loading } from "../../../common/Loading";
import { ErrorPage } from "../../../common/ErrorPage";
import { CastCrewSection } from "./styled";
import { Wrapper } from "../../../common/Wrapper/styled";

export const PeopleProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPersonDetail);
  const castCrew = useSelector(selectPersonCastCrew);
  const genres = useSelector(selectGenres);
  const loading = useSelector(selectLoadingPerson);

  useEffect(() => {
    dispatch(fetchPersonDetail(id));
    dispatch(fetchPersonCastCrew(id));
    dispatch(fetchGenres());
  }, [id, dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = <Loading title={"please wait..."} />;
      break;
    case "success":
      render = (
        <>
          <PersonDetail
            poster={person.profile_path}
            name={person.name}
            birthDate={person.birthday}
            birthPlace={person.place_of_birth}
            biography={person.biography}
          />
          <h2>Movies-Cast ({castCrew.cast?.length})</h2>
          <CastCrewSection>
            {castCrew.cast?.map((cast) => (
              <MovieTile
                key={cast.id}
                id={cast.id}
                poster={cast.poster_path}
                title={cast.title}
                release={cast.release_date}
                genres={genres}
                movieGenre={cast.genre_ids}
                rate={cast.vote_average}
                votes={cast.vote_count}
              />
            ))}
          </CastCrewSection>
          <h2>Movies-Crew ({castCrew.crew?.length})</h2>
          <CastCrewSection>
            {castCrew.crew?.map((crew) => (
              <MovieTile
                key={crew.id}
                id={crew.id}
                poster={crew.poster_path}
                title={crew.title}
                release={crew.release_date}
                genres={crew.genre_ids}
                movieGenre={crew.genre_ids}
                rate={crew.vote_average}
                votes={crew.vote_count}
              />
            ))}
          </CastCrewSection>
        </>
      );
      break;
    default:
      render = <ErrorPage />;
  }

  return <Wrapper> {render} </Wrapper>;
};
