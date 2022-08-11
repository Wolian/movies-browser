import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled";
import { MoviePeople } from "../../../common/MoviePeople";
import { fetchPopularPeople, selectPopularPeople } from "../peopleSlice";
import Pagination from "../../../common/Pagination";

export const PeopleList = () => {
  
  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople);

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  return (
    <Wrapper>
      <MoviePeople title={"Popular people"} items={people} />
      <Pagination />
    </Wrapper>
  );
};
