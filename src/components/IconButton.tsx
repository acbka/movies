import styled from "@emotion/styled/macro";

type IconButtonPropsType = {
  bgColor: string;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  handleClick: () => void;
};
type StyledBtnPropsType = {
  bgColor: string;
  isActive?: boolean;
  disabled?: boolean;
};

const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 35px;
  height: 35px;
  color: #fff;
  background: ${(props) =>
    props.isActive ? "var(--color-blue)" : props.bgColor};
  border: none;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  &:disabled {
    background: var(--color-grey);
  }
`;

const IconButton = ({
  isActive,
  disabled,
  children,
  bgColor,
  handleClick,
}: IconButtonPropsType) => {
  return (
    <StyledBtn
      isActive={isActive}
      onClick={handleClick}
      disabled={disabled}
      bgColor={bgColor}
    >
      {children}
    </StyledBtn>
  );
};

export default IconButton;
