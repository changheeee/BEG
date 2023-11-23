// ExCalendarTabMenu.js
import React, { useState } from "react";
import styled from "styled-components";
import SortedButton from "../atoms/SortedButton";
import Today from "../atoms/Today";
import ListVertical from "./ListVertical";
import { ExhibitionListWrap } from "./ExCategoryTabMenu";

const SortedWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CategoryTab = styled.ul`
  margin: 0.75rem 0;
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  overflow-x: scroll;
  scrollbar-height: 0;
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    height: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  > li {
    font-weight: 500;
    font-size: 1.125rem;
    cursor: pointer;
    white-space: nowrap;
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

export default function ExCalendarTabMenu({ data, selectedDate }) {
  console.log(selectedDate);

  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortType, setSortType] = useState("date");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  let sortedData = [...data.list];

  if (sortType === "bookmarked") {
    sortedData.sort((a, b) => b.bookmarked - a.bookmarked);
  } else {
    sortedData.reverse();
  }

  const filteredData = sortedData.filter(
    (item) =>
      (selectedCategory === "전체" || item.category === selectedCategory) &&
      ((formatDate(item.start) <= selectedDate &&
        formatDate(item.end) >= selectedDate) || // 이벤트가 선택된 날짜를 기간으로 포함하는 경우
        formatDate(item.start).toDateString() === selectedDate.toDateString() || // 이벤트가 선택된 날짜에 시작하는 경우
        formatDate(item.end).toDateString() === selectedDate.toDateString()) // 이벤트가 선택된 날짜에 종료하는 경우
  );

  return (
    <>
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
      <SortedWrap>
        <SortedButton setSortType={setSortType} />
      </SortedWrap>
      <ExhibitionListWrap>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <ListVertical key={index} item={item} />
          ))
        ) : (
          <p>선택된 날짜에 해당하는 공연・전시가 없습니다</p>
        )}
      </ExhibitionListWrap>
    </>
  );
}
