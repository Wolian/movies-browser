import { useLocation, useNavigate } from "react-router-dom";
import {
  searchQueryParamName,
  searchTypePage,
} from "../../features/SearchResult/searchNameValue";
import { Wrapper, IconSearch, Input } from "./styled";
import searchIcon from "./search.svg";
import { useTypePage } from "./useTypePage";

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
    }

    navigate({
      pathname: "/search",
      search: `?${searchParams}`,
    });
  };

  return (
    <Wrapper>
      <IconSearch src={searchIcon} alt="" />
      <Input
        value={query == null ? "" : query}
        onChange={onInputChanged}
        placeholder={`Search for ${typePage}...`}
        type="text"
        max="50"
      />
    </Wrapper>
  );
};

export default Search;
