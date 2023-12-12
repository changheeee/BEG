import { React, useState } from "react";
import BoardSearchInput from "../atoms/BoardSearchInput";
import WriteButton from "../atoms/WriteButton";
import { styled } from "styled-components";
import BoardSortedButton from "../atoms/BoardSortedButton";
import BoardList from "../atoms/BoardList";
import Pagination from "../atoms/Pagination";

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
`;

const BoardContent = styled.ul`
  padding-top: 1rem;
  width: 100%;
`;

export default function ReviewBoard({ data }) {
  const [sortType, setSortType] = useState("date");
  const [currentPage, setCurrentPage] = useState(0);

  const POSTS = [...data];

  const PER_PAGE = 5; //페이지에 보여줄 리스트 갯수

  let sortedData = [...POSTS];

  if (sortType === "likes") {
    sortedData.sort((a, b) => b.likes - a.likes);
  } else {
    sortedData.reverse();
  }

  // 페이지네이션
  const pageCount = Math.ceil(sortedData.length / PER_PAGE);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <BoardHeader>
        <BoardSortedButton setSortType={setSortType} />
        <BoardSearchInput />
        <WriteButton />
      </BoardHeader>
      <BoardContent>
        {sortedData
          .slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE)
          .map((item, index) => (
            <BoardList key={index} item={item} />
          ))}
      </BoardContent>
      {pageCount > 0 && (
        <Pagination
          pageCount={pageCount}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </>
  );
}
