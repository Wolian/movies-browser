import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  searchNextPage,
  searchQueryParamName,
  searchTypePage,
} from "./searchNameValue";
import { useShowResultSearch } from "./useShowResultSearch";
import {
  fetchSearch,
  selectResultsState,
  selectLoadingSearch,
  selectSearchResultsTotalPages,
  selectTotalResults,
} from "./searchSlice";
import { ErrorPage } from "../../common/ErrorPage";
import { Loading } from "../../common/Loading";
import { NoResultsPage } from "../../common/NoResultsPage";
import { usePageNumber } from "../../common/usePageNumber";
import { Pagination } from "../../common/Pagination";
import { Wrapper } from "./styled";

export const SearchResult = () => {
  const dispatch = useDispatch();
  const results = useSelector(selectResultsState);
  const loading = useSelector(selectLoadingSearch);
  const totalResults = useSelector(selectTotalResults);
  const totalPage = useSelector(selectSearchResultsTotalPages);
  const page = usePageNumber();
  let navigate = useNavigate();

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const query = urlParams.get(searchQueryParamName);
  const typePage = urlParams.get(searchTypePage);
  const keysUrl = urlParams.keys();

  const { showResults } = useShowResultSearch(
    query,
    typePage,
    results,
    totalResults,
    page
  );

  useEffect(() => {
    dispatch(fetchSearch({ query: query, typePage: typePage, page: page }));
  }, [query, typePage, page, dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = <Loading title={`Search result for "${query}"`} />;
      break;
    case "success":
      render = (
        <>
          {showResults} <Pagination totalPage={totalPage} page={page} />
        </>
      );
      break;
    default:
      render = <ErrorPage />;
  }

  if (totalResults === 0) {
    render = <NoResultsPage />;
  }

  if (query === null) {
    switch (typePage) {
      case "movie":
        navigate({
          pathname: "/movies",
        });
        break;
      case "person":
        navigate({
          pathname: "/people",
        });
        break;
      default:
        navigate({
          pathname: "/movies",
        });
    }
  }

  for (const keyUrl of keysUrl) {
    if (
      keyUrl !== searchTypePage &&
      keyUrl !== searchQueryParamName &&
      keyUrl !== searchNextPage
    ) {
      render = <ErrorPage />;
    }
  }

  return <Wrapper>{render}</Wrapper>;
};
