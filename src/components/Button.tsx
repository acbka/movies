import styled from "@emotion/styled/macro";

type ButtonPropsType = {
  bgColor: string;
  title: string;
  isActive?: boolean;
  disabled?: boolean;
  handleClick: () => void;
  className?: string;
};
type BtnPropsType = {
  bgColor: string;
  isActive?: boolean;
  disabled?: boolean;
};

const Btn = styled.button<BtnPropsType>`
  width: 100%;
  height: 44px;
  text-align: center;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 19px;
  font-weight: 600px;
  border: none;
  border-radius: 25px;
  margin: 10px auto;
  cursor: pointer;
  color: #fff;
  background: ${(props) => props.bgColor};
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  &:active {
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  }
  &:disabled {
    color: #000;
    background: var(--color-grey);
    &:hover {
      color: #000;
      background: var(--color-grey);
    }
  }
  &:hover {
    color: #fff;
    background: #000;
  }
`;

const Button = ({
  bgColor,
  title,
  isActive,
  disabled,
  handleClick,
  className,
}: ButtonPropsType) => {
  return (
    <Btn
      className={className}
      bgColor={bgColor}
      isActive={isActive}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </Btn>
  );
};

export default Button;
