import React, { useState, ChangeEvent } from "react";
import styled from "@emotion/styled/macro";
import IconButton from "../../../../components/IconButton";
import { sortList } from "./sortList";
import { TitleWrap, Title, ArrowDown, ArrowRight } from "../commonStyles";

type SortMoviesPropsType = {
  getSelectedValue: (arg: string) => void;
};

const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: start;
`;
const SelectTitle = styled.h4`
  font-weight: 300;
  margin-bottom: 10px;
`;
const CustomSelect = styled.select`
  background-color: var(--color-grey);
  width: 225px;
  border: none;
  padding: 5px;
  margin-top: 5px;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
`;

const SortMovies = ({ getSelectedValue }: SortMoviesPropsType) => {
  const [isSelectShown, setIsSelectShown] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    getSelectedValue(e.target.value);
  };

  const list = sortList.map((item, index) => (
    <option key={index} value={item.urlValue}>
      {item.title}
    </option>
  ));

  return (
    <>
      <TitleWrap>
        <Title>Sort</Title>
        <IconButton
          bgColor="transparent"
          handleClick={() => setIsSelectShown(!isSelectShown)}
        >
          {isSelectShown ? <ArrowDown /> : <ArrowRight />}
        </IconButton>
      </TitleWrap>
      {isSelectShown && (
        <SelectWrap>
          <SelectTitle>Sort Results By</SelectTitle>
          <CustomSelect onChange={handleChange}>{list}</CustomSelect>
        </SelectWrap>
      )}
    </>
  );
};

export default SortMovies;
