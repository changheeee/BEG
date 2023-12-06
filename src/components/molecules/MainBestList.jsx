import React from "react";
import styled from "styled-components";
import ExListPoster from "../atoms/ExListPoster";
import ExListTitle from "../atoms/ExListTitle";
import ExListLocation from "../atoms/ExListLocation";
import ExListPeriod from "../atoms/ExListPeriod";
import CategoryBadge from "../atoms/CategoryBadge";
import DdayBadge from "../atoms/DdayBadge";
import { PosterMainBest } from "../atoms/PosterStyle.js";
import { Link } from "react-router-dom";

const ListVerticalWrap = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;

  @media (max-width: 768px) {
    width: 95%;
    /* padding: 2rem; */
    /* justify-content: center; */
    /* align-items: center; */
  }

  .ranking_badge {
    position: absolute;
    border-radius: 0.65rem 0 0.65rem 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: ${({ ranking }) =>
      ranking === 1 ? "#ff00a2c5" : "#0008ffc7"}; // 조건에 따라 배경색 변경
    color: #fefefe;
    font-size: 1.25rem;
    font-weight: 700;
    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.12);

    @media (max-width: 768px) {
      /* font-size: 1rem;
      width: 30px;
      height: 30px; */
    }
  }
`;

const ListInfo = styled.div`
  /* width: 100%; */
  text-align: left;
  margin-top: 0.75rem;
`;

const BadgeWrap = styled.div`
  display: flex;
  margin-top: 0.3rem;
  > * {
    margin-right: 0.3rem;
  }
`;

export default function MainBestList({ ranking, item }) {
  return (
    <ListVerticalWrap to={`/ex_detail/${item.id}`} ranking={ranking}>
      <div className="ranking_badge">{ranking}</div>
      <PosterMainBest>
        <ExListPoster item={item} />
      </PosterMainBest>
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
