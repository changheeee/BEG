import React from "react";
import styled from "styled-components";
import ExListPoster from "../atoms/ExListPoster";
import ExListTitle from "../atoms/ExListTitle";
import ExListLocation from "../atoms/ExListLocation";
import ExListPeriod from "../atoms/ExListPeriod";
import CategoryBadge from "../atoms/CategoryBadge";
import DdayBadge from "../atoms/DdayBadge";
import { PosterMainCalendar } from "../atoms/PosterStyle.js";

const ListWrap = styled.li`
  display: flex;
  width: 33.3%;

  @media (max-width: 1400px) {
    margin-bottom: 0;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;
  }

  /* @media (max-width: 768px) {
    min-width: 100%;
    flex-direction: column;
    height: 100%;
    border: none;
    gap: 1rem;
  } */
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

  /* @media (max-width: 768px) {
    min-width: 100%;
    height: auto;
  } */
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
      <PosterMainCalendar>
        <ExListPoster item={item} />
      </PosterMainCalendar>
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
