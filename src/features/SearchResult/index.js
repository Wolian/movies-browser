import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchQueryParamName, searchTypePage } from "./searchNameValue";
import { fetchSearch, selectSearch } from "./searchSlice";
import ErrorPage from "../../common/ErrorPage";
import { NoResultsPage } from "../../common/NoResultsPage";
import { Wrapper } from "./styled";

export const SearchResult = () => {
  const dispatch = useDispatch();
  const showSearch = useSelector(selectSearch);
  console.log(showSearch);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const query = urlParams.get(searchQueryParamName);
  const typePage = urlParams.get(searchTypePage);
  const keysUrl = urlParams.keys();

  useEffect(() => {
    dispatch(fetchSearch({ query: query, typePage: typePage }));
  }, [query, typePage, dispatch]);

  let content = "";

  switch (typePage) {
    case "movie":
      content = (
        <div>
          <h1>Search result for "{query}"</h1>
          <p>Tutaj przeszukujemy filmy</p>
        </div>
      );
      break;
    case "person":
      content = (
        <div>
          <h1>Search result for "{query}"</h1>
          <p>Tutaj przeszukujemy osoby</p>
        </div>
      );
      break;
    default:
      content = <ErrorPage />;
  }

  if (query === null) {
    content = <NoResultsPage />;
  }

  for (const keyUrl of keysUrl) {
    if (keyUrl !== searchTypePage && keyUrl !== searchQueryParamName) {
      content = <ErrorPage />;
    }
  }

  return <Wrapper>{content}</Wrapper>;
};
