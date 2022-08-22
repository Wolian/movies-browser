import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchQueryParamName, searchTypePage } from "./searchNameValue";
import { fetchSearch } from "./searchSlice";
import ErrorPage from "../../common/ErrorPage";
import { NoResultsPage } from "../../common/NoResultsPage";
import { Wrapper } from "./styled";
import { useEffect } from "react";

export const SearchResult = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const query = urlParams.get(searchQueryParamName);
  const type = urlParams.get(searchTypePage);
  const keysUrl = urlParams.keys();

  useEffect(() => {
    dispatch(fetchSearch(query));
  }, [query]);

  let content = "";

  switch (type) {
    case "movies":
      content = (
        <div>
          <h1>Search result for "{query}"</h1>
          <p>Tutaj przeszukujemy filmy</p>
        </div>
      );
      break;
    case "people":
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
