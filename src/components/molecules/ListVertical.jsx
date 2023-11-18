import React from "react";
import styled from "styled-components";
import ExListPoster from "../atoms/ExListPoster";
import ExListTitle from "../atoms/ExListTitle";
import ExListLocation from "../atoms/ExListLocation";
import ExListPeriod from "../atoms/ExListPeriod";
import CategoryBadge from "../atoms/CategoryBadge";
import DdayBadge from "../atoms/DdayBadge";
import { PosterExhibition } from "../atoms/PosterStyle.js";

const ListVerticalWrap = styled.li`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
const ListBottom = styled.div`
  margin-top: 0.75rem;
`;

const BadgeWrap = styled.div`
  display: flex;
  margin-top: 0.3rem;
  > * {
    margin-right: 0.3rem;
  }
`;

export default function ListVertical({ item }) {
  return (
    <ListVerticalWrap>
      <PosterExhibition>
        <ExListPoster item={item} />
      </PosterExhibition>
      <ListBottom>
        <ExListTitle item={item} />
        <ExListLocation item={item} />
        <ExListPeriod item={item} />
        <BadgeWrap>
          <CategoryBadge item={item} />
          <DdayBadge item={item} />
        </BadgeWrap>
      </ListBottom>
    </ListVerticalWrap>
  );
}
