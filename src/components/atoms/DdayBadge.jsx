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

// 시작일을 나타내는 스타일드 컴포넌트
const StartDayBadgeWrap = styled(DdayBadgeWrap)`
  border-color: #007bff;
  color: #007bff;
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
  // 데이터에서 시작일과 종료일을 추출
  const startDate = new Date(item.start);
  const endDate = new Date(item.end);

  // 현재 날짜와의 시간 차이를 계산
  const startDiff = startDate - new Date();
  const endDiff = endDate - new Date();

  // 남은 일수를 계산
  const startDay = Math.ceil(startDiff / (1000 * 60 * 60 * 24));
  const endDay = Math.ceil(endDiff / (1000 * 60 * 60 * 24));

  return (
    <div>
      {startDay > 0 ? (
        // 시작일이 아직 오지 않았으면 시작일까지 남은 일수를 표시
        <StartDayBadgeWrap>{`${startDay}일 후 시작`}</StartDayBadgeWrap>
      ) : endDay >= 0 ? (
        // D-day가 0 이상이면 남은 일수를 표시
        <DdayBadgeWrap>{`D-${endDay}`}</DdayBadgeWrap>
      ) : (
        // D-day가 0 보다 작으면 전시가 종료되었음을 표시
        <ExhibitionStatus>종료</ExhibitionStatus>
      )}{" "}
    </div>
  );
}
