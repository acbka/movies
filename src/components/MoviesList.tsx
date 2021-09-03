import { movieType } from "../common/movieType";
import styled from "@emotion/styled/macro";
import PreviewCard from "./PreviewCard";

type MoviesListPropsType = {
  movies: movieType[];
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 5px;
  padding-left: 30px;
  @media (max-width: 750px) {
    padding-left: 0;
  }
`;
const MovieInfo = styled(PreviewCard)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  & > img {
    width: 50px;
    height: auto;
  }
  & > div {
    justify-content: flex-start;
    flex-direction: column;
    align-content: center;
    margin-left: 30px;
    & > h4 {
      font-size: 19px;
    }
  }
`;

const MoviesList = ({ movies }: MoviesListPropsType) => {
  const moviesList = movies.map((item, index) => [
    <MovieInfo key={index} movie={item} />,
  ]);
  return <Wrapper>{moviesList}</Wrapper>;
};

export default MoviesList;
