import { useState } from "react";
import styled from "@emotion/styled/macro";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right.svg";

type AsidePropsType = {
  callBack: (arg: boolean) => void;
};

type CustomButtonPropsType = {
   bgColor: string,
   disabled: boolean
}

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
${(props) => ({
   color: props.disabled ? "#fff" : "#fff",
   background: props.disabled ? props.bgColor : props.bgColor,
})}
&:hover {
   ${(props) => ({
     color: props.disabled ? "#fff" : "#fff",
     background: props.disabled ? props.bgColor : "#000",
   })}
 }
`
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
  padding: 15px;
  margin-top: 5px;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
`;

const Aside = ({ callBack }: AsidePropsType) => {
  const [isTable, setIsTable] = useState(true);
  const [isList, setIsList] = useState(false);
  const [isSelect, setSelect] = useState(false);

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
        <TitleWrap>
          <Title>Sort</Title>
          <IconButton
            bgColor="transparent"
            handleClick={() => setSelect(!isSelect)}
          >
            {isSelect ? <ArrowDown /> : <ArrowRight />}
          </IconButton>
        </TitleWrap>
        {isSelect && (
          <SelectWrap>
            <SelectTitle>Sort Results By</SelectTitle>
            <CustomSelect>
              <option value="PD">Popularity Descending</option>
              <option value="PA">Popularity Ascending</option>
              <option value="RD">Rating Descending</option>
              <option value="RA">Rating Ascending</option>
              <option value="RDD">Release Date Descending</option>
              <option value="RDA">Release Date Ascending</option>
              <option value="TAZ">Title (A-Z)</option>
              <option value="TZA">Title (Z-A)</option>
            </CustomSelect>
          </SelectWrap>
        )}
      </Block>
      <Button
        title="Search"
        bgColor= "var(--color-blue)"
        handleClick={showList}
        disabled={!isSelect}
      />
    </Wrapper>
  );
};

export default Aside;
