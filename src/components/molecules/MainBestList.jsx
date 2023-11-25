import React from "react";
import styled from "styled-components";
import ExListPoster from "../atoms/ExListPoster";
import ExListTitle from "../atoms/ExListTitle";
import ExListLocation from "../atoms/ExListLocation";
import ExListPeriod from "../atoms/ExListPeriod";
import CategoryBadge from "../atoms/CategoryBadge";
import DdayBadge from "../atoms/DdayBadge";
import { PosterMainBest } from "../atoms/PosterStyle.js";

const ListVerticalWrap = styled.a`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const ListInfo = styled.div`
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

export default function MainBestList({ item }) {
  return (
    <ListVerticalWrap href={`/ex_detail/${item.id}`}>
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
