import React, { useState, useEffect } from "react";
import MOCK_DATA from "../../MOCK_DATA.json";
import { styled } from "styled-components";

import CategoryBadge from "../atoms/CategoryBadge";
import DdayBadge from "../atoms/DdayBadge";
import BookmarkButton from "../atoms/BookmarkButton";

const ExInfoWrap = styled.div`
  width: 100%;
  /* border: 1px solid #eee; */
`;
const ExInfoHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .info-badges {
    display: flex;
    gap: 0.3rem;
  }
  .bookmark {
    position: absolute;
    right: 0;
    justify-self: flex-end;
  }

  > .title {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const ExInfoSection = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 1.25rem 0;
  width: 100%;
  border-top: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SectionPoster = styled.div`
  width: 30%;
  border: 1px solid #eee;

  > img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SectionOverview = styled.div`
  flex: 1;
  padding-left: 5rem;
  font-size: 1rem;

  > dl {
    padding: 0 0.75rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    height: calc(100% / 9);

    > dt {
      width: 100px;
      font-weight: 600;
    }
    > dd {
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    padding-top: 0.5rem;
    border-top: 1px solid #ccc;
    margin-top: 1rem;
    font-size: 0.875rem;

    > dl {
      padding: 0.4rem 0.75rem;
      border-bottom: 0;
      > dt {
        width: 40%;
      }
    }
  }
`;

export default function ExInfo({ data }) {
  return (
    <>
      <ExInfoWrap>
        <ExInfoHeader>
          <div className="info-badges">
            <CategoryBadge item={data} />
            <DdayBadge item={data} />
          </div>
          <div className="bookmark">
            <BookmarkButton />
          </div>
          <h4 className="title">《 {data.title} 》</h4>
        </ExInfoHeader>
        <ExInfoSection>
          <SectionPoster>
            <img src={data.src || "/images/poster_undefined.png"} alt="" />
          </SectionPoster>
          <SectionOverview>
            <dl>
              <dt>기간</dt>
              <dd>{data.start ? `${data.start}~${data.end}` : "-"}</dd>
            </dl>
            <dl>
              <dt>장소</dt>
              <dd>{data.location || "-"}</dd>
            </dl>
            <dl>
              <dt>시간</dt>
              <dd>{data.time || "-"}</dd>
            </dl>
            <dl>
              <dt>런타임</dt>
              <dd>{data.runtime || "-"}</dd>
            </dl>
            <dl>
              <dt>관람연령</dt>
              <dd>{data.view_age || "-"}</dd>
            </dl>
            <dl>
              <dt>출연진</dt>
              <dd>{data.cast || "-"}</dd>
            </dl>
            <dl>
              <dt>원작자</dt>
              <dd>{data.original_author || "-"}</dd>
            </dl>
            <dl>
              <dt>제작진</dt>
              <dd>{data.crew || "-"}</dd>
            </dl>
            <dl>
              <dt>기획제작사</dt>
              <dd>{data.production_company || "-"}</dd>
            </dl>
          </SectionOverview>
        </ExInfoSection>
      </ExInfoWrap>
    </>
  );
}
