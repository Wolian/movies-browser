import { useSelector } from "react-redux";
import { Wrapper } from "./styled";
import { MoviePeople } from "../../../common/MoviePeople";

export const PeopleList = () => {
  return (
    <Wrapper>
      <MoviePeople title={"Popular people"} />
    </Wrapper>
  );
};
