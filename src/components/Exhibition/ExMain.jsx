import React from "react";
import styled from "styled-components";

const category = [
  "전체",
  "연극",
  "뮤지컬",
  "클래식",
  "콘서트",
  "전통예술",
  "무용",
  "오페라",
  "기타",
  "대중음악",
  "복합",
  "서커스/마술"
];

//페이지 제목
const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background: no-repeat 50% url("/images/bg_lounge2.png");
  font-weight: bold;
  font-size: 1.5rem;
`;

//페이지 기본 섹션
const PageSection = styled.div`
  border: 1px solid #ccc;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 3rem;
  }
`;

//전시 탭메뉴
const ExTab = styled.div`
  display: flex;
  /* padding-bottom: 1rem; */
`;

const TabTitle = styled.h3`
  margin-right: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

// 카테고리 탭메뉴 부분
const CategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 4rem 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  @media (max-width: 320px) {
    padding: 0;
  }
`;

const CategoryTab = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  @media (max-width: 320px) {
    padding: 0;
    width: 100%;
    justify-content: start;
    flex-wrap: wrap;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
`;

const CategoryTabTitle = styled.li`
  font-weight: 500;
  font-size: 1.125rem;

  @media (max-width: 320px) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 0;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    font-size: 0.875rem;
  }
`;

// 오늘날짜
const Today = styled.h4`
  align-self: flex-end;
  /* font-size: 0.875rem; */
  font-size: 1rem;
  color: #999;
`;

// 최신순 랭킹순 정렬
const Sort = styled.div`
  align-self: flex-end;
  display: flex;

  button {
    font-size: 1rem;
    margin-left: 0.3rem;
  }
`;

//전시공연 리스트 세로형
const ExListVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

//전시공연 리스트 가로형
const ExListHorizontal = styled.a`
  display: flex;
  align-items: center;
`;

//전시 썸네일
const ExThumbnail = styled.a`
  display: block;
  width: 328px; /* 적절한 크기로 조절 */
  height: 456px;
  border: 1px solid #eee;
  background: url("/images/poster1.png") no-repeat center center;
  background-size: cover; /* 배경 이미지가 요소를 완전히 커버하도록 설정 */
  box-shadow: 4px 6px 6px 0px rgba(0, 0, 0, 0.12);
`;
//전시 기본 정보
const ExListInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.25rem;
  letter-spacing: -0.04rem;

  > * {
    padding-top: 0.25rem;
  }
  h5 {
    font-weight: bold;
    font-size: 1rem;
  }
  strong {
    font-size: 0.875rem;
    color: #555;
  }
  time {
    font-size: 0.75rem;
    color: #999;
  }
  p {
    font-weight: bold;
  }

  span {
    font-weight: 600;
    font-size: 0.75rem;
    color: red;
    border: 1px solid red;
    border-radius: 0.2rem;
    padding: 0.15rem;
    margin-right: 0.3rem;
  }
`;

export default function ExMain() {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}.`;

  return (
    <div>
      <PageTitle>공연・전시</PageTitle>
      <PageSection>
        <ExTab>
          <TabTitle>지금 볼만한 전시</TabTitle>
          <TabTitle>다가오는 전시</TabTitle>
        </ExTab>
        <CategoryWrap>
          <Today>{formattedDate}</Today>
          <CategoryTab>
            {category.map((item, index) => (
              <CategoryTabTitle key={index}>{item}</CategoryTabTitle>
            ))}
          </CategoryTab>
          <Sort>
            <button>최신순</button>
            <button>랭킹순</button>
          </Sort>
        </CategoryWrap>
        <div>
          <ExListVertical>
            <ExThumbnail href="#">
              {/* <img src="/images/poster1.png" alt="" /> */}
            </ExThumbnail>
            <ExListInfo>
              <h5>
                <a href="">전시공연 제목</a>
              </h5>
              <strong>전시공연 위치</strong>
              <time>시작기간 ~ 종료기간</time>
              <p>
                <span>카테고리</span>
                <span>디데이</span>
              </p>
            </ExListInfo>
          </ExListVertical>
        </div>
      </PageSection>
    </div>
  );
}
