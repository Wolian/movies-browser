import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchQueryParamName, searchTypePage } from "./searchNameValue";
import { fetchSearch, selectResultsState } from "./searchSlice";
import ErrorPage from "../../common/ErrorPage";
import { NoResultsPage } from "../../common/NoResultsPage";
import { Wrapper, ContainerMovie, ContainerPerson } from "./styled";
import { MovieTile } from "../../common/MovieTile";
import { PersonTile } from "../../common/PersonTile";
import Pagination from "../../common/Pagination";

export const SearchResult = () => {
  const dispatch = useDispatch();
  const results = useSelector(selectResultsState);
  console.log(results);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const query = urlParams.get(searchQueryParamName);
  const typePage = urlParams.get(searchTypePage);
  const keysUrl = urlParams.keys();

  useEffect(() => {
    dispatch(fetchSearch({ query: query, typePage: typePage }));
  }, [query, typePage, dispatch]);

  let render = "";

  switch (typePage) {
    case "movie":
      render = (
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
      render = (
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
      render = <ErrorPage />;
  }

  if (query === null) {
    render = <NoResultsPage />;
  }

  for (const keyUrl of keysUrl) {
    if (keyUrl !== searchTypePage && keyUrl !== searchQueryParamName) {
      render = <ErrorPage />;
    }
  }

  return (
    <Wrapper>
      {render}
      <Pagination />
    </Wrapper>
  );
};
