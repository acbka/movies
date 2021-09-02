import { useState } from "react";
import styled from "@emotion/styled/macro";
import IconButton from "../../../components/IconButton";
import { ReactComponent as ArrowRightIcon } from "../../../assets/arrow-right.svg";
import { sortList } from "./sortList";

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey);
`;
const Title = styled.h3`
  font-size: 18px;
  padding-left: 15px;
`;
const ArrowRight = styled(ArrowRightIcon)`
  width: 16px;
  height: 16px;
`;
const ArrowDown = styled(ArrowRightIcon)`
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

const SortMovies = () => {
  const [isSelectShown, setIsSelectShown] = useState(false);

  const list = sortList.map((item, index) => (
    <option key={index} value={item}>
      {item}
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
          <CustomSelect>{list}</CustomSelect>
        </SelectWrap>
      )}
    </>
  );
};

export default SortMovies;
