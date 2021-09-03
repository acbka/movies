import { movieType } from "../common/movieType";
import styled from "@emotion/styled/macro";
import PreviewCard from "./PreviewCard";

type MoviesTablePropsType = {
  movies: movieType[];
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  @media (max-width: 750px) {
    padding-left: 0;
    justify-content: space-between;
  }
`;
const MovieInfo = styled(PreviewCard)`
  width: 180px;
  height: 391px;
  flex-direction: column;
  align-content: flex-start;
  margin: 15px 12px;
  & > div {
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    padding: 26px 10px 12px 10px;
  }
`;

const MoviesTable = ({ movies }: MoviesTablePropsType) => {
  const moviesTable = movies.map((item, index) => [
    <MovieInfo key={index} movie={item} />,
  ]);

  return <Wrapper>{moviesTable}</Wrapper>;
};

export default MoviesTable;
