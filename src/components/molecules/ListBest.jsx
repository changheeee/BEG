import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PosterCommunityBest } from "../atoms/PosterStyle";
import data from "../../MOCK_DATA.json";
import ReviewPoster from "../atoms/ReviewPoster";
import CategoryBadge from "../atoms/CategoryBadge";

const ListBestWrap = styled.ul`
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > li:nth-child(3),
  > li:nth-child(4) {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
    border: 1px solid #ccc;
    border-radius: 25px;
    overflow: hidden;

    > li:first-child {
      margin-top: 0;
    }
    > li:nth-child(2),
    > li:nth-child(3),
    > li:nth-child(4) {
      margin-top: 0px;
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
    border: none;
  }
`;
//베스트리뷰 좌측 이미지영역
const Left = styled.div`
  width: 25%;
  height: 100%;

  @media (max-width: 768px) {
    width: auto;
  }
`;

//베스트리뷰 우측 글 정보 영역
const Right = styled.div`
  width: 75%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid #ddd;

  @media (max-width: 768px) {
    width: auto;
    padding: 15px;
  }
`;
const BestHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;

  //제목
  > .title {
    text-align: left;
    font-weight: 600;
    font-size: 1.125rem;
  }
  //본문 미리보기
  > .post_content {
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.15;
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; // 표시할 줄 수
    -webkit-box-orient: vertical;
  }

  @media (max-width: 768px) {
    > h4 {
      margin-top: 0.3rem;
      font-size: 1rem;
    }

    > .post_content {
      display: none;
    }
  }
`;

//베스트 리뷰 상단 전시정보
const BestTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  //전시제목
  > strong {
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.75rem;
    ul {
      gap: 0.4rem;
    }
  }
`;

export default function ListBest() {
  const sortedPosts = data.posts.sort((a, b) => b.likes - a.likes);
  const topPosts = sortedPosts.slice(0, 4);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <ListBestWrap>
      {isMobile ? (
        <Carousel
          showThumbs={false}
          // autoPlay={true}
          // infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          emulateTouch={true}
          dynamicHeight={true}
          useKeyboardArrows={false}
          stopOnHover={true}
        >
          {topPosts.map((item, index) => (
            <ListBestContainer key={index}>
              <Left>
                <PosterCommunityBest>
                  <ReviewPoster item={item} />
                </PosterCommunityBest>
              </Left>
              <Right>
                <BestHeader>
                  <BestTop>
                    <CategoryBadge item={item} />
                    <strong>[{item.ex_title}]</strong>
                  </BestTop>
                  <a className="title" href={`/review_detail/${item.id}`}>
                    {item.title}
                  </a>
                  <div
                    className="post_content"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
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
        </Carousel>
      ) : (
        topPosts.map((item, index) => (
          <ListBestContainer key={index}>
            <Left>
              <ReviewPoster item={item} />
            </Left>
            <Right>
              <BestHeader>
                <BestTop>
                  <CategoryBadge item={item} />
                  <strong>[{item.ex_title}]</strong>
                </BestTop>
                <a className="title" href={`/review_detail/${item.id}`}>
                  {item.title}
                </a>
                <div
                  className="post_content"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
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
        ))
      )}
    </ListBestWrap>
  );
}
