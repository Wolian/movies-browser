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
    case ("movies", "moviepage"):
      typePage = "movies";
      break;
    case ("people", "personpage"):
      typePage = "people";
      break;
    default:
      typePage = "movies";
  }

  return typePage;
};
