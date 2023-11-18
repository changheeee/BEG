import React from "react";
import styled from "styled-components";

const ExListPer = styled.time`
  font-size: 0.875rem;
  color: #aaa;
  letter-spacing: -0.04rem;
`;

export default function ExListPeriod({ item }) {
  return (
    <div>
      <ExListPer>{item.start + ` ~ ` + item.end}</ExListPer>
    </div>
  );
}
