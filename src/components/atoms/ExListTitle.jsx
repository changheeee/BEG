import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExListTit = styled(Link)`
  font-weight: bold;
  font-size: 1rem;
`;

export default function ExListTitle({ item }) {
  return (
    <div>
      <ExListTit to={`/ex_detail/${item.id}`}>{item.title}</ExListTit>
    </div>
  );
}
