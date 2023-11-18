import React from "react";
import styled from "styled-components";
import PostButton from "../atoms/PostButton";

const StyledButton = styled(PostButton)`
  background-color: #fefefe;
  color: #555;
  border: 1px solid #555;
`;

export default function CancelButton() {
  return <StyledButton>작성</StyledButton>;
}
