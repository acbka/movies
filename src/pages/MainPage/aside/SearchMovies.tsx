import React, { useState, ChangeEvent } from "react";
import styled from "@emotion/styled/macro";
import IconButton from "../../../components/IconButton";
import { TitleWrap, Title, ArrowRight, ArrowDown } from "./commonStyles";

type SearchMoviesPropsType = {
  getSearchValue: (arg: string) => void;
};

const CustomInput = styled.input`
  width: 220px;
  border: 2px solid var(--color-grey);
  border-radius: 8px;
  padding: 5px;
  margin: 15px;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
`;

const SearchMovies = ({ getSearchValue }: SearchMoviesPropsType) => {
  const [isInputShown, setIsInputShown] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    getSearchValue(e.target.value);
  };

  return (
    <>
      <TitleWrap>
        <Title>Search</Title>
        <IconButton
          bgColor="transparent"
          handleClick={() => setIsInputShown(!isInputShown)}
        >
          {isInputShown ? <ArrowDown /> : <ArrowRight />}
        </IconButton>
      </TitleWrap>
      {isInputShown && (
        <CustomInput type="text" name="search" onChange={handleChange} />
      )}
    </>
  );
};

export default SearchMovies;
