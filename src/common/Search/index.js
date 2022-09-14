import { useLocation, useNavigate } from "react-router-dom";
import {
  searchNextPage,
  searchQueryParamName,
  searchTypePage,
} from "../../features/SearchResult/searchNameValue";
import { useTypePage } from "./useTypePage";
import { SearchWrapper, IconSearch, Input } from "./styled";
import searchIcon from "./search.svg";

const Search = () => {
  const location = useLocation();
  const typePage = useTypePage();
  let navigate = useNavigate();

  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChanged = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchTypePage, typePage);
      searchParams.set(searchQueryParamName, target.value);
      searchParams.set(searchNextPage, 1);
    }

    navigate({
      pathname: "/search",
      search: `?${searchParams}`,
    });
  };

  return (
    <SearchWrapper>
      <IconSearch src={searchIcon} alt="" />
      <Input
        value={query == null ? "" : query}
        onChange={onInputChanged}
        placeholder={`Search for ${typePage}...`}
        type="text"
        max="50"
      />
    </SearchWrapper>
  );
};

export default Search;
