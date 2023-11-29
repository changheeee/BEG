import React from "react";
import styled from "styled-components";
import ExListPoster from "../atoms/ExListPoster";
import ExListTitle from "../atoms/ExListTitle";
import ExListLocation from "../atoms/ExListLocation";
import ExListPeriod from "../atoms/ExListPeriod";
import CategoryBadge from "../atoms/CategoryBadge";
import DdayBadge from "../atoms/DdayBadge";
import { PosterCommunityBest } from "../atoms/PosterStyle.js";

const ListWrap = styled.li`
  width: 50%;
  display: flex;
  /* flex-direction: column; */

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
  margin-left: 1rem;
  margin-top: 0.3rem;

  @media (max-width: 1200px) {
    height: 130px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 0;
  }
`;

const BadgeWrap = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  > * {
    margin-right: 0.3rem;
  }

  @media (max-width: 1200px) {
    margin-top: 0;
  }
`;

export default function ListCalendar({ item }) {
  return (
    <ListWrap>
      <PosterCommunityBest>
        <ExListPoster item={item} />
      </PosterCommunityBest>
      <ListInfo>
        <BadgeWrap>
          <CategoryBadge item={item} />
          <DdayBadge item={item} />
        </BadgeWrap>
        <div>
          <ExListTitle item={item} />
          <ExListLocation item={item} />
          <ExListPeriod item={item} />
        </div>
      </ListInfo>
    </ListWrap>
  );
}
