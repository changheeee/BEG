import React from "react";
import styled from "styled-components";

const MorButtonWrap = styled.a`
  display: inline-flex;
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid #ccc;
  border-radius: 0.3rem;

  &:active {
    background-color: #eee;
    color: #444;
  }
`;

export default function MoerButton() {
  return (
    <>
      <MorButtonWrap href="#">더보기</MorButtonWrap>
    </>
  );
}
