import { useState } from "react";
import styled from "@emotion/styled/macro";
import Button from "../../../components/Button";

import SortMovies from "../aside/sortMovies/SortMovies";
import SearchMovies from "../aside/SearchMovies";

type AsidePropsType = {
  changeView?: (arg: boolean) => void;
  changeArrangement?: (arg: string) => void;
};

type CustomButtonPropsType = {
  bgColor: string;
  disabled: boolean;
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 15px;
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
  }
`;
const Block = styled.div`
  min-width: 260px;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  margin-bottom: 12px;
`;
const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 15px;
`;
const CustomButton = styled(Button)<CustomButtonPropsType>`
  &:disabled {
    color: #fff;
    background: ${(props) => props.bgColor};
    &:hover {
      color: #fff;
      background: ${(props) => props.bgColor};
    }
  }
`;

const Aside = ({ changeView, changeArrangement }: AsidePropsType) => {
  const [isTable, setIsTable] = useState(true);
  const [isList, setIsList] = useState(false);
  const [isSearchBtnActive, setIsSearchBtnActive] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [searchString, setSearchString] = useState("");
  const partialSortUrl = `https://api.themoviedb.org/3/discover/movie?api_key=dd4bd51f8d6385246bd537b189c291ab&sort_by=${sortBy}&page=`;
  const partialSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=dd4bd51f8d6385246bd537b189c291ab&query=${searchString}&page=`;

  const showList = () => {
    setIsList(true);
    setIsTable(false);
    changeView?.(false);
  };

  const showTable = () => {
    setIsTable(true);
    setIsList(false);
    changeView?.(true);
  };

  const sortMovies = (value: string) => {
    setIsSearchBtnActive(true);
    setSortBy(value);
  };

  const searchMovies = (value: string) => {
    setIsSearchBtnActive(true);
    setSearchString(value);
  };

  const showSelectedMovies = () => {
    changeArrangement?.(sortBy ? partialSortUrl : partialSearchUrl);
    setIsSearchBtnActive(false);
    setSortBy("");
  };

  return (
    <Wrapper>
      <Block>
        <ButtonsWrap>
          <CustomButton
            title="List"
            bgColor="var(--color-green)"
            handleClick={showList}
            disabled={isList}
          />
          <CustomButton
            title="Table"
            bgColor="var(--color-blue)"
            handleClick={showTable}
            disabled={isTable}
          />
        </ButtonsWrap>
      </Block>
      <Block>
        <SearchMovies activeButton={searchMovies} />
      </Block>
      <Block>
        <SortMovies activeButton={sortMovies} />
      </Block>
      <Button
        title="Search"
        bgColor="var(--color-blue)"
        handleClick={showSelectedMovies}
        disabled={!isSearchBtnActive}
      />
    </Wrapper>
  );
};

export default Aside;
