import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { fetchData } from "../../common/fetchData";
import Header from "./Header";
import Aside from "./aside/Aside"
import MoviesTable from "../../components/MoviesTable";
import MoviesList from "../../components/MoviesList";
import Pagination from "../../components/pagination/Pagination";

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
const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const MainPage = () => {
  const [isTable, setIsTable] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [partialUrl, setPartialUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=dd4bd51f8d6385246bd537b189c291ab&page=`
  );
  const [data, setData] = useState({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  useEffect(() => {
    const url = `${partialUrl}${page}`;
    fetchData({ url }).then(setData);
  }, [partialUrl, page]);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Aside changeView={setIsTable} changeArrangement={setPartialUrl} />
        <div>
          {isTable ? (
            <MoviesTable movies={data.results} />
          ) : (
            <MoviesList movies={data.results} />
          )}
          <PaginationWrap>
            <Pagination
              page={page}
              pages={data.total_pages}
              setPage={setPage}
            />
          </PaginationWrap>
        </div>
      </Main>
    </Wrapper>
  );
};

export default MainPage;
