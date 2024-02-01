import React, { useState, useMemo } from "react";
import styled from "styled-components";
import SortedButton from "../atoms/SortedButton";
import Today from "../atoms/Today";
import ListVertical from "./ListVertical";
import Pagination from "../atoms/Pagination";

const TodayAndSorted = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CategoryTab = styled.ul`
  padding: 1rem 0;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  overflow-x: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }

  > li {
    height: 100%;
    font-weight: 500;
    font-size: 1.125rem;
    cursor: pointer;
    white-space: nowrap;
  }
`;

export const ExhibitionListWrap = styled.ul`
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;

  @media (max-width: 1919px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1560px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1200px) {
    gap: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > li:last-child {
      border-bottom: 0;
    }
  }
`;

const CATEGORIES = [
  "전체",
  "전시",
  "연극",
  "뮤지컬",
  "클래식",
  "콘서트",
  "전통예술",
  "무용",
  "오페라",
  "기타",
  "대중음악",
  "복합",
  "서커스/마술",
];

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split(".");
  return new Date(`${year}-${month}-${day}`);
};

export default function CurrentExhibitions({ data }) {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortType, setSortType] = useState("date");
  const [currentPage, setCurrentPage] = useState(0);
  // const [filteredData, setFilteredData] = useState([]);

  // 상태가 바뀌면 기다렸다가 실행시키면서 ... useMemo()변수 저장 useCallback()함수 저장
  // 불필요한 렌더링을 줄일 수 있다. useMemo()
  // const filterdData = useMemo(() => {

  const filteredData = useMemo(() => {
    return data
      .filter(
        (item) =>
          (selectedCategory === "전체" || item.category === selectedCategory) &&
          formatDate(item.start) <= new Date() &&
          formatDate(item.end) >= new Date()
      )
      .sort((a, b) =>
        sortType === "bookmarked"
          ? b.bookmarked - a.bookmarked
          : new Date(b.start) - new Date(a.start)
      );
  }, [data, selectedCategory, sortType]);

  // 페이지네이션
  const PER_PAGE = 10; // 한 페이지에 보여줄 아이템 수
  const pageCount = Math.ceil(filteredData.length / PER_PAGE);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 320); // 페이지 변경 시 스크롤을 맨 위로 이동
  };

  return (
    <>
      {/* 탭 버튼 */}
      <CategoryTab>
        {CATEGORIES.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              color: selectedCategory === category ? "#333 " : "#ddd",
              fontWeight: selectedCategory === category ? "700" : "400",
            }}
          >
            {category}
          </li>
        ))}
      </CategoryTab>

      {/* 정렬 버튼 */}
      <TodayAndSorted>
        <Today />
        <SortedButton setSortType={setSortType} />
      </TodayAndSorted>

      {/* 전시 리스트 렌더링 부분 */}
      <ExhibitionListWrap>
        {filteredData
          .slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE)
          .map((item, index) => (
            <ListVertical key={index} item={item} />
          ))}
      </ExhibitionListWrap>

      {/* 페이지네이션 */}
      {pageCount > 0 && (
        <Pagination
          pageCount={Math.max(1, pageCount - 1)}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </>
  );
}
