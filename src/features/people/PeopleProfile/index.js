import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Wrapper } from "./styled";
import { fetchPersonDetail, selectPersonDetail } from "../peopleSlice";
import { PersonDetail } from "../../../common/PersonDetail";


export const PeopleProfile = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPersonDetail);

  useEffect(() => {
    dispatch(fetchPersonDetail(id));
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
    </Wrapper>
  );
};