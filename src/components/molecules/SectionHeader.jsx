import React from "react";
import styled from "styled-components";

const SectionHeaderWrap = styled.div`
  width: 100%;
  height: 271px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => {
    switch (props.bgtype) {
      case "exhibition":
        return `#333;`;
      case "location":
        return `#333`;
      case "community":
        return `#fefefe`;
      case "search":
        return `#fefefe`;
      default:
        return "none";
    }
  }};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => {
    switch (props.bgtype) {
      case "exhibition":
        return `url(/images/bg_exhibition.png)`;
      case "location":
        return `url(/images/bg_location.png)`;
      case "community":
        return `url(/images/bg_community.png)`;
      case "search":
        return `url(/images/bg_search.png)`;
      default:
        return "none";
    }
  }};

  @media (max-width: 768px) {
    height: 100px;
    font-size: 1.5rem;
  }
`;

export default function SectionHeader({
  exhibition,
  location,
  community,
  search,
}) {
  let bgType = "";
  let sectionTitle = "";

  if (exhibition) {
    bgType = "exhibition";
    sectionTitle = "공연・전시";
  } else if (location) {
    bgType = "location";
    sectionTitle = "공연・전시 공간";
  } else if (community) {
    bgType = "community";
    sectionTitle = "커뮤니티";
  } else if (search) {
    bgType = "search";
    sectionTitle = "검색결과 입니다.";
  }

  return <SectionHeaderWrap bgtype={bgType}>{sectionTitle}</SectionHeaderWrap>;
}
