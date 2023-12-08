import React from "react";
import { styled } from "styled-components";

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
`;

export default function LoadingPage() {
  return <LoadingWrap>Loading...</LoadingWrap>;
}
