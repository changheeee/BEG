import React from "react";
import styled from "styled-components";

const ExListTit = styled.a`
  font-weight: bold;
  font-size: 1rem;
`;

export default function ExListTitle({ item }) {
  return (
    <div>
      <ExListTit href={`/ex_detail/${item.id}`}>{item.title}</ExListTit>
    </div>
  );
}
