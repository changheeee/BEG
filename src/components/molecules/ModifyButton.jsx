import React from "react";
import styled from "styled-components";
import PostButton from "../atoms/PostButton";

const StyledButton = styled(PostButton)`
  background-color: #888;
  color: #fefefe;
  border: none;
`;

export default function ModifyButton() {
  return <StyledButton>수정</StyledButton>;
}
