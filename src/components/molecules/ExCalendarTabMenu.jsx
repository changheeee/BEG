import React, { useState } from "react";
import styled from "styled-components";
import SortedButton from "../atoms/SortedButton";
import Pagination from "../atoms/Pagination";
import ListVertical from "./ListVertical";
import { ExhibitionListWrap } from "./CurrentExhibitions";
import { CategoryTab } from "./CurrentExhibitions";

const SortedWrap = styled.div`
  display: flex;
  justify-content: flex-end;
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

export default function ExCalendarTabMenu({ data, selectedDate }) {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortType, setSortType] = useState("date");
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 번호

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // 카테고리 변경 시 페이지를 처음으로 초기화
  };

  let sortedData = [...data];

  if (sortType === "bookmarked") {
    sortedData.sort((a, b) => b.bookmarked - a.bookmarked);
  } else {
    sortedData.reverse(); //최신순 정렬
  }

  const filteredData = sortedData.filter(
    (item) =>
      (selectedCategory === "전체" || item.category === selectedCategory) &&
      ((formatDate(item.start) <= selectedDate &&
        formatDate(item.end) >= selectedDate) ||
        formatDate(item.start).toDateString() === selectedDate.toDateString() ||
        formatDate(item.end).toDateString() === selectedDate.toDateString())
  );

  // 페이지네이션
  const PER_PAGE = 10; // 한 페이지에 보여줄 아이템 수

  const pageCount = Math.ceil(filteredData.length / PER_PAGE); // 전체 페이지 수

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 320); // 페이지 변경 시 스크롤을 맨 위로 이동
  };

  return (
    <>
      <CategoryTab>
        {/* 탭 버튼 */}
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
      <SortedWrap>
        <SortedButton setSortType={setSortType} />
      </SortedWrap>

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
