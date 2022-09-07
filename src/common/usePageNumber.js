import { useLocation } from "react-router-dom";
import { searchNextPage } from "../features/SearchResult/searchNameValue";

export const usePageNumber = () => {
  const queryPageNumber = useLocation();
  const page = new URLSearchParams(queryPageNumber.search).get(searchNextPage);

  return page;
};
