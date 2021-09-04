import styled from "@emotion/styled/macro";
import { ReactComponent as ArrowRightIcon } from "../../../assets/arrow-right.svg";

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
