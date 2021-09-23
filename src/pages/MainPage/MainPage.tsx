import { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { fetchData } from "../../common/fetchData";
import Header from "./Header";
import ThumbnailView from "./ThumbnailView";
import ListView from "./ListView";
import Aside from "./aside/Aside";
import Pagination from "../../components/pagination/Pagination";
import { movieType } from "../../common/movieType";
import Spinner from "../../components/Spinner";

type responseType = {
  page: number;
  results: movieType[];
  total_pages: number;
  total_results: number;
};

const Wrapper = styled.div`
  width: 100%;
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: 258px 1fr;
  padding: 55px;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;
const Error = styled.p`
  padding-left: 30px;
`;
const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const MainPage = () => {
  const [page, setPage] = useState<number>(1);
  const [isCells, setIsCells] = useState<boolean>(true);
  const [partialUrl, setPartialUrl] = useState(
    "https://api.themoviedb.org/3/discover/movie?api_key=dd4bd51f8d6385246bd537b189c291absort_by=popularity.desc&page="
  );
  const [data, setData] = useState<responseType>();
  const errorMessage = "There are no movies that matched your query.";

  const setInintialSortOrSearch = (value: string) => {
    setPartialUrl(value);
    setPage(1);
  };

  useEffect(() => {
    const url = `${partialUrl}${page}`;
    fetchData({ url }).then(setData);
  }, [partialUrl, page]);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Aside
          changeView={setIsCells}
          changeMoviesArrangement={setInintialSortOrSearch}
        />
        {data === null && <Error>{errorMessage}</Error>}
        {!data && <Spinner />}
        {data && data !== null && (
          <div>
            {isCells ? (
              <ThumbnailView movies={data.results} />
            ) : (
              <ListView movies={data.results} />
            )}
            {!!data.total_pages && (
              <PaginationWrap>
                <Pagination
                  pages={data.total_pages}
                  page={page}
                  setPage={setPage}
                />
              </PaginationWrap>
            )}
          </div>
        )}
      </Main>
    </Wrapper>
  );
};

export default MainPage;
