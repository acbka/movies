import { useState } from "react";
import styled from "@emotion/styled/macro";
import Button from "../../../components/Button";
import SortMovies from "./sortMovies/SortMovies";
import SearchMovies from "./SearchMovies";

type AsidePropsType = {
  changeView?: (arg: boolean) => void;
  changeMoviesArrangement?: (arg: string) => void;
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

const Aside = ({ changeView, changeMoviesArrangement }: AsidePropsType) => {
  const [isCells, setIsCells] = useState(true);
  const [isSearchBtnDisabled, setIsSearchBtnDisabled] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [searchString, setSearchString] = useState("");
  const partialSortUrl = `https://api.themoviedb.org/3/discover/movie?api_key=dd4bd51f8d6385246bd537b189c291ab&sort_by=${sortBy}&page=`;
  const partialSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=dd4bd51f8d6385246bd537b189c291ab&query=${searchString}&page=`;

  const showList = () => {
    setIsCells(false);
    changeView?.(false);
  };

  const showCells = () => {
    setIsCells(true);
    changeView?.(true);
  };

  const sortMovies = (value: string) => {
    setIsSearchBtnDisabled(false);
    setSortBy(value);
  };

  const searchMovies = (value: string) => {
    setIsSearchBtnDisabled(false);
    setSearchString(value);
  };

  const showSortedOrFoundMovies = () => {
    changeMoviesArrangement?.(sortBy ? partialSortUrl : partialSearchUrl);
    setIsSearchBtnDisabled(true);
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
            disabled={!isCells}
          />
          <CustomButton
            title="Cells"
            bgColor="var(--color-blue)"
            handleClick={showCells}
            disabled={isCells}
          />
        </ButtonsWrap>
      </Block>
      <Block>
        <SearchMovies getSearchValue={searchMovies} />
      </Block>
      <Block>
        <SortMovies getSelectedValue={sortMovies} />
      </Block>
      <Button
        title="Search"
        bgColor="var(--color-blue)"
        handleClick={showSortedOrFoundMovies}
        disabled={isSearchBtnDisabled}
      />
    </Wrapper>
  );
};

export default Aside;
