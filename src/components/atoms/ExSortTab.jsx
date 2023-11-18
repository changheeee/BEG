import React, { useState } from "react";
import styled from "styled-components";

const ExSortTabWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ExSortTitle = styled.div`
  cursor: pointer;
  letter-spacing: -0.04rem;
  font-size: 1.125rem;

  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#333" : "#ccc")};
`;

export default function ExSortTab({ exNow, handleSortChange }) {
  return (
    <ExSortTabWrap>
      <ExSortTitle active={exNow} onClick={() => handleSortChange(true)}>
        지금 볼만한 전시
      </ExSortTitle>
      <ExSortTitle active={!exNow} onClick={() => handleSortChange(false)}>
        다가오는 전시
      </ExSortTitle>
    </ExSortTabWrap>
  );
}
