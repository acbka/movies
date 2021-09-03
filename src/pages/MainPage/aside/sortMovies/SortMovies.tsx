import React, { useState, ChangeEvent } from "react";
import styled from "@emotion/styled/macro";
import IconButton from "../../../../components/IconButton";
import { ReactComponent as ArrowRightIcon } from "../../../../assets/arrow-right.svg";
import { sortList } from "./sortList";

type SortMoviesPropsType = {
  activeButton: (arg: string) => void;
};

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey);
`;
export const Title = styled.h3`
  font-size: 18px;
  padding-left: 15px;
`;
export const ArrowRight = styled(ArrowRightIcon)`
  width: 16px;
  height: 16px;
`;
export const ArrowDown = styled(ArrowRightIcon)`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
`;
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

const SortMovies = ({ activeButton }: SortMoviesPropsType) => {
  const [isSelectShown, setIsSelectShown] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    activeButton(e.target.value);
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
