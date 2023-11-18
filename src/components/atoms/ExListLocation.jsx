import React from "react";
import styled from "styled-components";

const ExListLoc = styled.strong`
  font-size: 0.875rem;
  color: #777;
  font-weight: 500;
`;

export default function ExListLocation({ item }) {
  return (
    <div>
      <ExListLoc>{item.location}</ExListLoc>
    </div>
  );
}
