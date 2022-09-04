import { useLocation } from "react-router-dom";

export const usePageNumber = () => {
  const queryPageNumber = useLocation();
  const page = new URLSearchParams(queryPageNumber.search).get("page");

  return page;
};
