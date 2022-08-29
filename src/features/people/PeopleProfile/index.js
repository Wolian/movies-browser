import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Wrapper } from "./styled";
import { fetchPersonDetail, fetchPopularPeople, selectPopularPeople } from "../peopleSlice";
import { PersonDetail } from "../../../common/PersonDetail";


export const PeopleProfile = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople);

  useEffect(() => {
    dispatch(fetchPopularPeople());
    dispatch(fetchPersonDetail(id));
  }, [id, dispatch]);

  return (
    <Wrapper>
      <PersonDetail
          poster={people.profile_path}
          name={people.name}
          birthDate={people.birthday}
          birthPlace={people.place_of_birth}
          biography={people.biography}
        />
    </Wrapper>
  );
};