import IconButton from "../IconButton";
import styled from "@emotion/styled/macro";
import PaginationItem from "./PaginationItem";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow-right.svg";

type PaginationPropsType = {
  pages: number;
  page: number;
  setPage: (arg: number) => void;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowRight = styled(ArrowRightIcon)`
  width: 16px;
  height: 16px;
  & > path {
    fill: #fff;
  }
`;
const ArrowLeft = styled(ArrowRightIcon)`
  width: 16px;
  height: 16px;
  & > path {
    fill: #fff;
  }
  transform: rotate(180deg);
`;

const Pagination = ({ pages, page, setPage }: PaginationPropsType) => {
  const previousPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  const buttonsArray = Array.from({ length: pages }, (v, k) => k + 1).map(
    (item, index) => (
      <PaginationItem
        key={index}
        handleClick={() => setPage(item)}
        isActive={page === item}
        isHidden={
          (page <= 3 && item > 5) ||
          (page > pages - 2 && item < pages - 4) ||
          (page > 3 &&
            page <= pages - 2 &&
            (item > page + 2 || item < page - 2))
        }
        pageNumber={item}
      />
    )
  );

  return (
    <>
      {!!pages && (
        <Wrapper>
          <IconButton isDisabled={page === 1} handleClick={previousPage}>
            <ArrowLeft />
          </IconButton>
          {buttonsArray}
          <IconButton isDisabled={page === pages} handleClick={nextPage}>
            <ArrowRight />
          </IconButton>
        </Wrapper>
      )}
    </>
  );
};

export default Pagination;
