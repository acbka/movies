import styled from "@emotion/styled/macro";

type ButtonPropsType = {
  bgColor: string;
  title: string;
  disabled?: boolean;
  className?: string;
  handleClick: () => void;
};

type BtnPropsType = {
  bgColor: string;
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
  disabled,
  className,
  handleClick,
}: ButtonPropsType) => {
  return (
    <Btn
      className={className}
      bgColor={bgColor}
      disabled={disabled}
      onClick={handleClick}
    >
      {title}
    </Btn>
  );
};

export default Button;
