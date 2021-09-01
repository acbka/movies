import React, {useState, useEffect} from "react";
import styled from "@emotion/styled/macro";
import { fetchData } from "./fetchData"
import { movieType } from "./movieType";

const Wrapper = styled.div`
  background: red;
`;

const MainPage = () => {
   const [page, setPage] = useState<number>(1);
   // const [data, setData] = useState({})
  const [movies, setMovies] = useState<movieType[]>([]);

   useEffect(() => {
     fetchData({ page }).then(setMovies)
   
  }, [page]);
   
  

  console.log("page", page,"movies",movies);
  return (
    <Wrapper>
      <button onClick={()=>setPage(page + 1)}>Click</button>
    </Wrapper>
  );
};

export default MainPage;
