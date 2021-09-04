import IconButton from "../IconButton";

type PaginationItemPropsType = {
  pageNumber: number;
  isActive: boolean;
  handleClick: () => void;
};

const PaginationItem = ({
  pageNumber,
  isActive,
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
