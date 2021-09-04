import IconButton from "../IconButton";

type PaginationItemPropsType = {
  pageNumber: number;
  isActive: boolean;
  //   isHidden: boolean;
  handleClick: () => void;
};

const PaginationItem = ({
  pageNumber,
  isActive,
  //   isHidden,
  handleClick,
}: PaginationItemPropsType) => {
  return (
    <IconButton
      bgColor="var(--color-green)"
      isActive={isActive}
      handleClick={handleClick}
    >
      {pageNumber}
    </IconButton>
  );
};

export default PaginationItem;
