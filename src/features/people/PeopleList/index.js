import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectLoadingPopularPeople,
  selectPopularPeopleResults,
  selectPopularPeopleTotalPage,
} from "../peopleSlice";
import { MoviePeople } from "../../../common/MoviePeople";
import { usePageNumber } from "../../../common/usePageNumber";
import { Pagination } from "../../../common/Pagination";
import { Loading } from "../../../common/Loading";
import { ErrorPage } from "../../../common/ErrorPage";
import { Wrapper } from "./styled";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const page = usePageNumber();
  const people = useSelector(selectPopularPeopleResults);
  const totalPage = useSelector(selectPopularPeopleTotalPage);
  const loading = useSelector(selectLoadingPopularPeople);

  useEffect(() => {
    dispatch(fetchPopularPeople(page));
  }, [page, dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = <Loading title={"please wait..."} />;
      break;
    case "success":
      render = (
        <>
          <MoviePeople title={"Popular people"} items={people} />
          <Pagination totalPage={totalPage} page={page === null ? 1 : page} />
        </>
      );
      break;
    default:
      render = <ErrorPage />;
  }

  return <Wrapper>{render}</Wrapper>;
};
