import { useLocation } from "react-router-dom";
import { searchTypePage } from "../../features/SearchResult/searchNameValue";

export const useTypePage = () => {
  const location = useLocation();
  const locationPathName = location.pathname;

  let typePage = locationPathName.split("/")[1];
  switch (typePage) {
    case "search":
      typePage = new URLSearchParams(location.search).get(searchTypePage);
      break;
    case "movies":
    case "moviepage":
      typePage = "movie";
      break;
    case "people":
    case "personpage":
      typePage = "person";
      break;
    default:
      typePage = "movie";
  }

  return typePage;
};
