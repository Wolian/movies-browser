import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Container } from "./styled";
import { fetchPopularPeople, selectPopularPeople } from "../peopleSlice";
import { PersonDetail } from "../../../common/PersonDetail";
// import { MoviePeople } from "../../../common/MoviePeople";


export const PeopleProfile = () => {
  

  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople);

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <PersonDetail
          poster={people.profile_path}
          name={people.name}
          birthDate={people.birthday}
          birthPlace={people.place_of_birth}
          biography={people.biography}
        />
        {/* <MoviePeople title={"Movies-cast"} items={people.cast} />
        <MoviePeople title={"Movies-crew"} items={people.crew} /> */}
      </Container>
    </Wrapper>
  );
};