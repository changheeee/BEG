import React, { useState } from "react";
import styled from "styled-components";

// 카테고리 목록
const InfoCategory = ["공연・전시정보", "공연・전시장 안내", "관람후기"];

// 스타일드 컴포넌트 정의
const MoreInfoTabHeader = styled.ul`
  width: 100%;
  display: flex;
`;

const MoreInfoTabListItem = styled.li`
  cursor: pointer;
  text-align: center;
  padding: 10px 0;
  width: calc(100% / 3);
  border-bottom: ${(props) =>
    props.isActive ? "2px solid #333" : "1px solid #ccc"};
  color: ${(props) => (props.isActive ? "#333" : "#ccc")};
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
`;

const MoreInfoTabContent = styled.div``;

export default function MoreInfoTabMenu() {
  // 활성화된 탭을 관리하는 상태
  const [activeTab, setActiveTab] = useState(InfoCategory[0]);

  // 탭 클릭 이벤트 핸들러
  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  // 선택된 탭에 따라 컨텐츠를 렌더링하는 함수
  const renderContent = () => {
    switch (activeTab) {
      case "공연・전시정보":
        return <>공연상세정보</>;
      case "공연・전시장 안내":
        return <>전시장 안내 지도</>;
      case "관람후기":
        return <>리뷰 컴포넌트</>;
    }
  };

  // 렌더링
  return (
    <>
      <MoreInfoTabHeader>
        {InfoCategory.map((category) => (
          <MoreInfoTabListItem
            key={category}
            onClick={() => handleTabClick(category)}
            isActive={activeTab === category}
          >
            {category}
          </MoreInfoTabListItem>
        ))}
      </MoreInfoTabHeader>
      <MoreInfoTabContent>{renderContent()}</MoreInfoTabContent>
    </>
  );
}
