import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { fetchData } from "../../common/fetchData";
import Header from "./Header";
import Aside from "./Aside";
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
  const [data, setData] = useState({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  useEffect(() => {
    fetchData({ page }).then(setData);
  }, [page]);

  const choosePage = (value: number) => {
    setPage(value);
  };
console.log("pages", data.results)
  return (
    <Wrapper>
      <Header />
      <Main>
        <Aside callBack={setIsTable} />
        <div>
          {!!data.results.length && isTable ? (
            <MoviesTable movies={data.results} />
          ) : (
            <MoviesList movies={data.results} />
          )}
          <PaginationWrap>
            <Pagination
              page={page}
              pages={data.total_pages}
              setPage={choosePage}
            />
          </PaginationWrap>
        </div>
      </Main>
    </Wrapper>
  );
};

export default MainPage;
