import { movieType } from "../common/movieType";
import styled from "@emotion/styled/macro";
import MoviePreview from "./MoviePreview";

type ListViewPropsType = {
  movies: movieType[];
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 30px;
  padding: 5px 20px;
  @media (max-width: 750px) {
    padding-left: 0;
  }
`;
const MovieInfo = styled(MoviePreview)`
  width: 100%;
  height: 141px;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  & > img {
    height: 100%;
    width: auto;
  }
  & > div {
    justify-content: space-between;
    flex-direction: column;
    align-content: center;
    margin-left: 30px;
    & > h4 {
      font-size: 19px;
    }
  }
`;

const ListView = ({ movies }: ListViewPropsType) => {
  const moviesList = movies.map((item, index) => [
    <MovieInfo key={index} movie={item} />,
  ]);
  return (
    <Wrapper>
      {movies.length
        ? moviesList
        : "There are no movies that matched your query."}
    </Wrapper>
  );
};

export default ListView;
