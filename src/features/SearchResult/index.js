import { useLocation } from "react-router-dom";
import { searchQueryParamName, searchTypePage } from "./searchNameValue";
import ErrorPage from "../../common/ErrorPage";
import { Wrapper } from "./styled";

export const SearchResult = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const query = urlParams.get(searchQueryParamName);
  const type = urlParams.get(searchTypePage);
  const keysUrl = urlParams.keys();

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

  for (const keyUrl of keysUrl) {
    if (keyUrl !== searchTypePage && keyUrl !== searchQueryParamName) {
      content = <ErrorPage />;
    }
  }

  return <Wrapper>{content}</Wrapper>;
};
