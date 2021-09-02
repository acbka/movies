import { useState } from "react";
import styled from "@emotion/styled/macro";
import Button from "../../components/Button";

import SortMovies from "./sortMovies/SortMovies";

type AsidePropsType = {
  callBack: (arg: boolean) => void;
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

const Aside = ({ callBack }: AsidePropsType) => {
  const [isTable, setIsTable] = useState(true);
  const [isList, setIsList] = useState(false);

  const showList = () => {
    setIsList(true);
    setIsTable(false);
    callBack(false);
  };
  const showTable = () => {
    setIsTable(true);
    setIsList(false);
    callBack(true);
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
        <SortMovies />
      </Block>
      <Button
        title="Search"
        bgColor="var(--color-blue)"
        handleClick={showList}
        disabled={true}
      />
    </Wrapper>
  );
};

export default Aside;
