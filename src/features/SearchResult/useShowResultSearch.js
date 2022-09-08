import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, selectGenres } from "../movies/moviesSlice";
import { MovieTile } from "../../common/MovieTile";
import { PersonTile } from "../../common/PersonTile";
import ErrorPage from "../../common/ErrorPage";
import { ContainerMovie, ContainerPerson } from "./styled";

export const useShowResultSearch = (query, typePage, results, totalResults) => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  let showResults = "";

  switch (typePage) {
    case "movie":
      showResults = (
        <>
          <h1>
            Search result for "{query}" ({totalResults})
          </h1>
          <ContainerMovie>
            {results?.map((result) => (
              <MovieTile
                key={result.id}
                id={result.id}
                poster={result.poster_path}
                title={result.title}
                release={result.release_date}
                genres={genres}
                movieGenre={result.genre_ids}
                rate={result.vote_average}
                votes={result.vote_count}
              />
            ))}
          </ContainerMovie>
        </>
      );
      break;
    case "person":
      showResults = (
        <>
          <h1>
            Search result for "{query}" ({totalResults})
          </h1>
          <ContainerPerson>
            {results?.map((result) => (
              <PersonTile
                key={result.id}
                personId={result.id}
                name={result.name}
                photo={result.profile_path}
              />
            ))}
          </ContainerPerson>
        </>
      );
      break;
    default:
      showResults = <ErrorPage />;
  }

  return { showResults };
};
