import React from "react";
import styled from "styled-components";
import PostButton from "./PostButton";
import { Link } from "react-router-dom";

const StyledButton = styled(PostButton)`
  background-color: #555;
  color: #fefefe;
  border: none;
`;

export default function WriteButton() {
  return (
    <Link to="/write">
      <StyledButton>글쓰기</StyledButton>
    </Link>
  );
}
