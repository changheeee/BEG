import React from "react";
import styled from "styled-components";

const TodayWrap = styled.span`
  /* font-size: 0.875rem; */
  font-size: 1rem;
  color: #999;
`;

export default function Today() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}.`;

  return <TodayWrap>{formattedDate}</TodayWrap>;
}
