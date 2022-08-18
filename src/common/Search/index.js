import { useLocation, useNavigate } from "react-router-dom";
import { searchQueryParamName } from "../../features/SearchResult/searchQueryParamName";
import { Wrapper, IconSearch, Input } from "./styled";
import searchIcon from "./search.svg";

const Search = () => {
  const location = useLocation();
  const locationPathName = location.pathname;
  let navigate = useNavigate();

  let typePage = locationPathName.split("/")[1];
  if (typePage === "" || (typePage !== "movies" && typePage !== "people")) {
    typePage = "movies";
  }

  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChanged = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    navigate({
      pathname: "/results",
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
