import IconButton from "../IconButton";

type PaginationItemPropsType = {
  pageNumber: number;
  isActive: boolean;
  isHidden: boolean;
  handleClick: () => void;
};

// type IconButtonPropsType = {
//   isActive: boolean;
// };

// const IconButton = styled.button<IconButtonPropsType>`
//   width: 35px;
//   height: 35px;
//   background: ${(props) =>
//     props.isActive ? "var(--color-blue)" : "var(--color-green)"};
//   border: none;
//   border-radius: 50%;
//   margin: 5px;
//   cursor: pointer;
// `;

const PaginationItem = ({
  pageNumber,
  isActive,
  isHidden,
  handleClick,
}: PaginationItemPropsType) => {
  return (
    <>
      {!isHidden && (
        <IconButton isActive={isActive} handleClick={handleClick}>
          {pageNumber}
        </IconButton>
      )}
    </>
  );
};

export default PaginationItem;
