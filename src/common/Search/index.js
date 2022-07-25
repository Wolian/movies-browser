import { WrpapperSearch, IconSearch, Input } from "./styled";
import search from "./search.svg";

const Search = () => (
  <WrpapperSearch>
    <IconSearch src={search} alt="" />
    <Input placeholder="Search for movie..." />
  </WrpapperSearch>
);

export default Search;
