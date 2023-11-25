import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { styled } from "styled-components";
import SectionHeader from "../molecules/SectionHeader";
import { SectionContent } from "../atoms/SectionContent";
import MOCK_DATA from "../../MOCK_DATA.json";
import RecommendedButton from "../atoms/RecommendButton";
import PostButton from "../atoms/PostButton";

const DetailHeader = styled.div`
  > strong {
    //전시제목
    font-size: 0.875rem;
    color: #888;
    font-weight: 500;
  }
  > h4 {
    //게시글 제목
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.125rem 0 0.75rem 0;
  }
  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .post-info-item {
      //작성자, 날짜 || 조회수, 좋아요수 각 영역
      display: flex;
    }
    span {
      //작성자, 날짜, 조회수, 좋아요수
      margin-right: 0.5rem;
      font-size: 0.875rem;
      color: #999;
      display: flex;
      align-items: center;

      > img {
        //아이콘
        height: 0.75rem;
        margin-right: 0.125rem;
        //좋아요 아이콘 하단 높이 맞추기
        &.like_btn {
          margin-bottom: 5px;
        }
      }
    }
  }
`;
const DetailSection = styled.div`
  margin: 0.5rem 0;
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;

  > .content {
    //본문영역(나중에 html형식을 파싱하면, 개별 태그 지정 필요할듯)
    //이미지는 width: 100%; 나머지 태그 별도 조정
    width: 100%;
    margin-bottom: 15vh;
    line-height: 1.3;
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.35rem;
    }
  }
`;
const DetailFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const ListButton = styled(PostButton)`
  border: 1px solid #555;
  color: #555;
`;
const EditButton = styled(PostButton)`
  border: none;
  color: #fefefe;
  background-color: #555;
`;

export default function ReviewDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isRecommended, setIsRecommended] = useState(false);

  useEffect(() => {
    const foundData = MOCK_DATA.posts.find((item) => item.id === parseInt(id));
    setData(foundData);
    setIsRecommended(foundData.recommended);
  }, [id]);

  if (!data) return null;

  // 좋아요토글 추천 여부 전달 필요(서버)
  //   const toggleRecommend = () => {
  //     setIsRecommended(?);
  //   };

  return (
    <>
      <SectionHeader community />
      <SectionContent>
        <DetailHeader>
          <strong>{data.ex_title}</strong>
          <h4>{data.title}</h4>
          <div className="post-info">
            <div className="post-info-item">
              <span>{data.author}</span>
              <span>
                <img src="/images/ico_time.svg" />
                {data.posted_at}
              </span>
            </div>
            <div className="post-info-item">
              <span>
                <img src="/images/ico_views.svg" />
                {data.views}
              </span>
              <span>
                <img src="/images/ico_likes.svg" className="like_btn" />
                {data.likes}
              </span>
            </div>
          </div>
        </DetailHeader>
        <DetailSection>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <RecommendedButton
            recommended={isRecommended}
            // onClick={toggleRecommend}
          />
        </DetailSection>
        <DetailFooter>
          <ListButton href="/community">목록</ListButton>
          <EditButton>수정</EditButton>
        </DetailFooter>
      </SectionContent>
    </>
  );
}
