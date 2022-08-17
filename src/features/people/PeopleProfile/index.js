import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled";
import { fetchPopularPeople, selectPopularPeople } from "../peopleSlice";
import { MovieDetail } from "../../../common/MovieDetail";
import { MoviePeople } from "../../../common/MoviePeople";


export const PeopleList = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople);

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <MovieDetail
          poster={movies.poster_path}
          title={movies.title}
          release={movies.release_date}
          countries={movies.production_countries}
          description={movies.overview}
        />
        <MoviePeople title={"Cast"} items={people.cast} />
        <MoviePeople title={"Crew"} items={people.crew} />
      </Container>
    </Wrapper>
  );
};