import styled from "@emotion/styled/macro";

type IconButtonPropsType = {
  isActive?: boolean;
  disabled?: boolean;
  handleClick: () => void;
  bgColor?: string;
  children: React.ReactNode;
};
type StyledBtnPropsType = {
  isActive?: boolean;
  disabled?: boolean;
  bgColor?: string;
};

const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 35px;
  height: 35px;
  color: #fff;
  background: ${(props) =>
    props.disabled
      ? "var(--color-grey)"
      : props.isActive
      ? "var(--color-green)"
      : "var(--color-blue)"};
      background: ${(props) => props.bgColor};
  border: none;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
`;

const IconButton = ({
  isActive,
  disabled,
  handleClick,
  children,
  bgColor,
}: IconButtonPropsType) => {
  return (
    <>
      <StyledBtn
        isActive={isActive}
        onClick={handleClick}
        disabled={disabled}
        bgColor={bgColor}
      >
        {children}
      </StyledBtn>
    </>
  );
};

export default IconButton;
