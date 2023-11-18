import React from "react";
import styled from "styled-components";
import PostButton from "../atoms/PostButton";

const StyledButton = styled(PostButton)`
  background-color: #555;
  color: #fefefe;
  border: none;
`;

export default function SubmitButton() {
  return <StyledButton>취소</StyledButton>;
}
