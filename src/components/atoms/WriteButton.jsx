import React from "react";
import styled from "styled-components";
import PostButton from "./PostButton";

const StyledButton = styled(PostButton)`
  background-color: #555;
  color: #fefefe;
  border: none;
`;

export default function WriteButton() {
  return <StyledButton href="/write">글쓰기</StyledButton>;
}
