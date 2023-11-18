import React from "react";
import styled from "styled-components";

// D-day를 나타내는 스타일드 컴포넌트
const DdayBadgeWrap = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  border: 1px solid #ff7070;
  color: #ff7070;
  border-radius: 0.2rem;
  padding: 2px 5px;
`;

// 전시 종료 상태를 나타내는 스타일드 컴포넌트
const ExhibitionStatus = styled.span`
  padding: 2px 5px;
  font-weight: 700;
  font-size: 0.75rem;
  border: 1.5px solid #999;
  border-radius: 0.2rem;
  color: #999;
`;

export default function DdayBadge({ item }) {
  // 데이터에서 종료일을 추출합니다.
  const endDate = new Date(item.end);

  // 현재 날짜와 종료일과의 시간 차이를 계산합니다.
  const timeDiff = endDate - new Date();

  // 남은 일수를 계산합니다.
  const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div>
      {dDay > 0 ? (
        // D-day가 0보다 크면 남은 일수를 표시합니다.
        <DdayBadgeWrap>{`D-${dDay}`}</DdayBadgeWrap>
      ) : (
        // D-day가 0 이하이면 전시가 종료되었음을 표시합니다.
        <ExhibitionStatus>종료</ExhibitionStatus>
      )}{" "}
    </div>
  );
}
