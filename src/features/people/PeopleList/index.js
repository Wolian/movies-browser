import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeopleResults,
  selectPopularPeopleTotalPage,
} from "../peopleSlice";
import { MoviePeople } from "../../../common/MoviePeople";
import { usePageNumber } from "../../../common/usePageNumber";
import Pagination from "../../../common/Pagination";
import { Wrapper } from "./styled";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const page = usePageNumber();
  const people = useSelector(selectPopularPeopleResults);
  const totalPage = useSelector(selectPopularPeopleTotalPage);

  useEffect(() => {
    dispatch(fetchPopularPeople(page));
  }, [page, dispatch]);

  return (
    <Wrapper>
      <MoviePeople title={"Popular people"} items={people} />
      <Pagination totalPage={totalPage} page={page === null ? 1 : page} />
    </Wrapper>
  );
};
