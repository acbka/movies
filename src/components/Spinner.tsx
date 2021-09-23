import styled from "@emotion/styled/macro";

const Roller = styled.div`
  display: block;
  margin: 50px auto;
  position: relative;
  width: 80px;
  height: 80px;
  & > div {
    transform-origin: 50px 50px;
    animation: lds-spinner 1.2s linear infinite;
  }
  & :after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: var(--color-blue);
  }

  & :nth-of-type(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  & :nth-of-type(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  & :nth-of-type(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  & :nth-of-type(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  & :nth-of-type(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  & :nth-of-type(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  & :nth-of-type(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  & :nth-of-type(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }

  & :nth-of-type(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  & :nth-of-type(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  & :nth-of-type(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  & :nth-of-type(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Spinner = () => {
  return (
    <Roller>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Roller>
  );
};

export default Spinner;
