import { MovieTile } from "../../common/MovieTile";
import { PersonTile } from "../../common/PersonTile";
import { ContainerMovie, ContainerPerson } from "./styled";

export const useShowResultSearch = (query, typePage, results, error) => {
  // console.log(typePage);
  let showResults = "";

  switch (typePage) {
    case "movie":
      showResults = (
        <div>
          <h1>Search result for "{query}"</h1>
          <ContainerMovie>
            {results?.map((result) => (
              <MovieTile
                key={result.id}
                id={result.id}
                poster={result.poster_path}
                title={result.title}
                release={result.release_date}
                genres={result.genre_ids}
                movieGenre={result.genre_ids}
                rate={result.vote_average}
                votes={result.vote_count}
              />
            ))}
          </ContainerMovie>
        </div>
      );
      break;
    case "person":
      showResults = (
        <div>
          <h1>Search result for "{query}"</h1>
          <ContainerPerson>
            {results?.map((result) => (
              <PersonTile
                key={result.id}
                name={result.name}
                photo={result.profile_path}
              />
            ))}
          </ContainerPerson>
        </div>
      );
      break;
    default:
      showResults = error;
  }

  return { showResults };
};
