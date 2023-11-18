import React from "react";
import styled from "styled-components";
import { PosterCommunity } from "../atoms/PosterStyle";
import data from "../../MOCK_DATA.json";
import ReviewPoster from "../atoms/ReviewPoster";
import CategoryBadge from "../atoms/CategoryBadge";

const ListBestWrap = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > li:nth-child(3),
  > li:nth-child(4) {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    > li:first-child {
      margin-top: 0;
    }
    > li:nth-child(2),
    > li:nth-child(3),
    > li:nth-child(4) {
      margin-top: 10px;
    }
  }
`;

const ListBestContainer = styled.li`
  display: flex;
  width: 49%;
  border: 1px solid #ccc;
  border-radius: 25px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
//베스트리뷰 좌측 이미지영역
const Left = styled.div`
  width: 25%;
  height: 100%;
`;

//베스틜뷰 우측 글 정보 영역
const Right = styled.div`
  width: 75%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BestHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  //제목
  > h4 {
    font-weight: 600;
    font-size: 1.125rem;
  }
  //본문 미리보기
  > p {
    font-size: 0.875rem;
    line-height: 1.15;
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; // 표시할 줄 수
    -webkit-box-orient: vertical;
  }
`;

//베스트 리뷰 상단 전시정보
const ExInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  //전시제목
  > span {
    font-weight: 500;
    font-size: 0.875rem;
    color: #a6a6a6;
  }
`;

//베스트리뷰 하단 (닉네임, 조회수 좋아요)
const BestFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.875rem;

  //조회수, 좋아요
  ul {
    display: flex;
    gap: 0.6rem;

    > li {
      display: flex;
      align-items: center;
      gap: 0.15rem;

      > img {
        height: 0.75rem;
      }
      > span {
        padding-top: 0.2rem;
      }
    }
  }
`;

export default function ListBest() {
  // 좋아요(likes)가 높은 순으로 데이터를 정렬합니다.
  const sortedPosts = data.posts.sort((a, b) => b.likes - a.likes);

  // 좋아요가 가장 높은 상위 4개의 게시물만 선택합니다.
  const topPosts = sortedPosts.slice(0, 4);

  return (
    <ListBestWrap>
      {topPosts.map((item, index) => (
        <ListBestContainer key={index}>
          <Left>
            <PosterCommunity>
              <ReviewPoster item={item} />
            </PosterCommunity>
          </Left>
          <Right>
            <BestHeader>
              <ExInfo>
                <CategoryBadge item={item} />
                <span>[{item.ex_title}]</span>
              </ExInfo>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </BestHeader>
            <BestFooter>
              <span>{item.author}</span>
              <ul>
                <li>
                  <img src="/images/ico_views.svg" />
                  <span>{item.views}</span>
                </li>
                <li>
                  <img src="/images/ico_likes.svg" />
                  <span>{item.likes}</span>
                </li>
              </ul>
            </BestFooter>
          </Right>
        </ListBestContainer>
      ))}
    </ListBestWrap>
  );
}
