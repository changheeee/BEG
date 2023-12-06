import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MorButtonWrap = styled(Link)`
  display: block;
  height: fit-content;
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
  return <MorButtonWrap to="/exhibition">더보기</MorButtonWrap>;
}
