import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchQueryParamName, searchTypePage } from "./searchNameValue";
import { useShowResultSearch } from "./useShowResultSearch";
import {
  fetchSearch,
  selectResultsState,
  selectLoadingSearch,
} from "./searchSlice";
import ErrorPage from "../../common/ErrorPage";
import Loading from "../../common/Loading";
import { NoResultsPage } from "../../common/NoResultsPage";
import { Wrapper } from "./styled";

export const SearchResult = () => {
  const dispatch = useDispatch();
  const results = useSelector(selectResultsState);
  const loading = useSelector(selectLoadingSearch);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const query = urlParams.get(searchQueryParamName);
  const typePage = urlParams.get(searchTypePage);
  const keysUrl = urlParams.keys();

  const { showResults } = useShowResultSearch(query, typePage, results);

  useEffect(() => {
    dispatch(fetchSearch({ query: query, typePage: typePage }));
  }, [query, typePage, dispatch]);

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

  if (query === null) {
    render = <NoResultsPage />;
  }

  for (const keyUrl of keysUrl) {
    if (keyUrl !== searchTypePage && keyUrl !== searchQueryParamName) {
      render = <ErrorPage />;
    }
  }

  return <Wrapper>{render}</Wrapper>;
};
