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
  margin-bottom: 1.25rem;

  @media (max-width: 1200px) {
    margin-bottom: 0;
    width: 100%;
    height: 160px;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
`;

const ListInfo = styled.div`
  margin-top: 0.75rem;

  @media (max-width: 1200px) {
    height: 130px;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 0;
  }
`;

const BadgeWrap = styled.div`
  display: flex;
  margin-top: 0.3rem;
  > * {
    margin-right: 0.3rem;
  }

  @media (max-width: 1200px) {
    margin-top: 0;
  }
`;

export default function ListVertical({ item }) {
  return (
    <ListVerticalWrap>
      <PosterExhibition>
        <ExListPoster item={item} />
      </PosterExhibition>
      <ListInfo>
        <div>
          <ExListTitle item={item} />
          <ExListLocation item={item} />
          <ExListPeriod item={item} />
        </div>
        <BadgeWrap>
          <CategoryBadge item={item} />
          <DdayBadge item={item} />
        </BadgeWrap>
      </ListInfo>
    </ListVerticalWrap>
  );
}
