import { Wrapper, IconSearch, Input } from "./styled";
import search from "./search.svg";

const Search = () => (
  <Wrapper>
    <IconSearch src={search} alt="" />
    <Input placeholder="Search for movie..." />
  </Wrapper>
);

export default Search;
