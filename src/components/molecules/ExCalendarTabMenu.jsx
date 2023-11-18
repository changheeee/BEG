import React, { useState } from "react";
import styled from "styled-components";
import SortedButton from "../atoms/SortedButton";
import Today from "../atoms/Today";
import ListVertical from "./ListVertical";

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

  > li {
    font-weight: 500;
    font-size: 1.125rem;
    cursor: pointer;
  }
`;

const ExhibitionListWrap = styled.ul`
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > li {
    margin-bottom: 1.25rem;
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
        {sortedData
          .filter(
            (item) =>
              (selectedCategory === "전체" ||
                item.category === selectedCategory) &&
              formatDate(item.start) <= selectedDate &&
              formatDate(item.end) >= selectedDate
          )
          .map((item, index) => (
            <ListVertical key={index} item={item} />
          ))}
      </ExhibitionListWrap>
    </>
  );
}
