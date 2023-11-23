import React from "react";
import styled from "styled-components";

const CategoryBadgeWrap = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 0.2rem;
  padding: 2px 5px;

  ${(props) => {
    switch (props.category) {
      case "전시":
        return "color: #579AFF; border: 1px solid #579AFF;";
      case "연극":
        return "color: #FFA157; border: 1px solid #FFA157;";
      case "무용":
        return "color: #FF57B8; border: 1px solid #FF57B8;";
      case "복합":
        return "color: #396500; border: 1px solid #396500;";
      case "뮤지컬":
        return "color: #A157FF; border: 1px solid #A157FF;";
      case "클래식":
        return "color: #1226DD; border: 1px solid #1226DD;";
      case "콘서트":
        return "color: #39B659; border: 1px solid #39B659;";
      case "오페라":
        return "color: #0088B1; border: 1px solid #0088B1;";
      case "전통예술":
        return "color: #C69500; border: 1px solid #C69500;";
      case "대중음악":
        return "color: #FF9757; border: 1px solid #FF9757;";
      case "서커스/마술":
        return "color: #E900C4; border: 1px solid #E900C4;";

      default:
        // 기타
        return "color: #999; border: 1px solid #999;";
    }
  }}
`;

export default function CategoryBadge({ item }) {
  return (
    <>
      <CategoryBadgeWrap category={item.category}>
        {item.category}
      </CategoryBadgeWrap>
    </>
  );
}
