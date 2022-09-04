import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchQueryParamName, searchTypePage } from "./searchNameValue";
import { useShowResultSearch } from "./useShowResultSearch";
import {
  fetchSearch,
  selectResultsState,
  selectLoadingSearch,
  selectSearchResultsTotalPages,
  selectTotalResults,
} from "./searchSlice";
import ErrorPage from "../../common/ErrorPage";
import Loading from "../../common/Loading";
import { NoResultsPage } from "../../common/NoResultsPage";
import { usePageNumber } from "../../common/usePageNumber";
import { Wrapper } from "./styled";

export const SearchResult = () => {
  const dispatch = useDispatch();
  const results = useSelector(selectResultsState);
  const loading = useSelector(selectLoadingSearch);
  const totalResults = useSelector(selectTotalResults);
  const totalPage = useSelector(selectSearchResultsTotalPages);
  const page = usePageNumber();

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const query = urlParams.get(searchQueryParamName);
  const typePage = urlParams.get(searchTypePage);
  const keysUrl = urlParams.keys();

  const { showResults } = useShowResultSearch(
    query,
    typePage,
    results,
    totalPage,
    totalResults
  );

  useEffect(() => {
    dispatch(fetchSearch({ query: query, typePage: typePage, page: page }));
  }, [query, typePage, page, dispatch]);

  let render = "";

  switch (loading) {
    case true:
      render = <Loading title={`Search result for "${query}"`} />;
      break;
    case false:
      render = showResults;
      break;
    default:
      render = <ErrorPage />;
  }

  if (query === null || totalResults === 0) {
    render = <NoResultsPage />;
  }

  for (const keyUrl of keysUrl) {
    if (
      keyUrl !== searchTypePage &&
      keyUrl !== searchQueryParamName &&
      keyUrl !== "page"
    ) {
      render = <ErrorPage />;
    }
  }

  return <Wrapper>{render}</Wrapper>;
};
