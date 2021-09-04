import styled from "@emotion/styled/macro";
import IconButton from "../IconButton";
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
  & > div {
    display: flex;
    align-items: center;
  }
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
const Dots = styled.div`
  width: 35px;
  height: 35px;
  background: var(--color-grey);
  border-radius: 50%;
  padding: 3px 11px;
  color: #fff;
`;

const Pagination = ({ pages, page, setPage }: PaginationPropsType) => {
  const previousPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const buttonsArray = Array.from({ length: pages }, (v, k) => k + 1).map(
    (item, index) => {
      return (
        (item === 1 && page > 3 && (
          <div key={index}>
            <PaginationItem
              handleClick={() => setPage(item)}
              isActive={page === item}
              pageNumber={item}
            />
            <Dots>...</Dots>
          </div>
        )) ||
        (((item <= 5 && page <= 3 && item !== 1) ||
          (item > pages - 5 && page > pages - 3 && item !== pages) ||
          (item > page - 3 &&
            item < page + 3 &&
            item !== 2 &&
            item !== pages - 1)) && (
          <PaginationItem
            key={index}
            handleClick={() => setPage(item)}
            isActive={page === item}
            pageNumber={item}
          />
        )) ||
        (item === pages && page < pages - 2 && (
          <div key={index}>
            <Dots>...</Dots>
            <PaginationItem
              handleClick={() => setPage(item)}
              isActive={page === item}
              pageNumber={item}
            />
          </div>
        ))
      );
    }
  );

  return (
    <Wrapper>
      <IconButton
        bgColor="var(--color-green)"
        disabled={page === 1}
        handleClick={previousPage}
      >
        <ArrowLeft />
      </IconButton>
      {buttonsArray}
      <IconButton
        bgColor="var(--color-green)"
        disabled={page === pages}
        handleClick={nextPage}
      >
        <ArrowRight />
      </IconButton>
    </Wrapper>
  );
};

export default Pagination;
