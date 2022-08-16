import { Wrapper, IconSearch, Input } from "./styled";
import search from "./search.svg";
import { useLocation } from "react-router-dom";

const Search = () => {
  const typePage = useLocation().pathname.split("/")[1];
  console.log(typePage);

  return (
    <Wrapper>
      <IconSearch src={search} alt="" />
      <Input placeholder={`Search for ${typePage}...`} />
    </Wrapper>
  );
};

export default Search;
