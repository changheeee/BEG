import React from "react";
import styled from "styled-components";
import CategoryBadge from "../atoms/CategoryBadge";

const BoardListWrap = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 150px;

  .poster {
    border: 1px solid #eee;
    height: 100%;
    > img {
      height: 100%;
    }
  }

  .content-wrapper {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;

    .inner-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      //카테고리뱃지, 공연전시제목
      .category-info {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.875rem;
        span {
          font-size: 0.675rem;
        }
        //공연전시제목
        > strong {
          color: #999;
          letter-spacing: -0.04rem;
        }
      }

      //후기게시물 제목
      .post_title {
        margin-top: 0.5rem;
        font-weight: 600;
        font-size: 1.125rem;
      }

      //후기 본문
      .post_content {
        margin-top: 0.4rem;
        width: 100%;
        text-align: left;
        font-size: 0.875rem;
        line-height: 1.15;
        letter-spacing: -0.03rem;
        color: #555;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; // 표시할 줄 수
        -webkit-box-orient: vertical;
      }
    }

    //작성자,작성일,조회수,좋아요
    .post-info {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      > li {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        white-space: nowrap;

        .gray {
          font-size: 0.875rem;
          color: #999;
        }

        > img {
          height: 0.875rem;
          //좋아요 아이콘 하단 높이 맞추기
          &.like_btn {
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .content-wrapper {
      flex-direction: column;
      .inner-content {
        width: 100%;
        //카테고리 뱃지
        span {
          font-size: 0.65rem;
        }
        //전시공연 제목
        .category-info {
          font-size: 0.75rem;
        }
        //관람후기 제목
        .post_title {
          font-size: 0.875rem;
        }
        //관람후기 본문 미리보기
        .post_content {
          width: 100%;
          font-size: 0.75rem;
        }
      }
      //게시글 정보 (작성자,작성일,조회수,좋아요수)
      .post-info {
        width: 100%;
        gap: 0;
        flex-wrap: wrap;

        > li {
          margin-right: 0.5rem;
          > img {
            height: 0.75rem;
          }
          .gray {
            font-size: 0.65rem;
            color: #999;
          }
        }
        //작성자
        .author {
          width: 100%;
          padding-top: 0.5rem;
          /* display: none; */
        }
      }
    }
  }
`;

function BoardList({ item }) {
  return (
    <BoardListWrap>
      {/* 포스터 이미지 */}
      <a className="poster" href={`/review_detail/${item.id}`}>
        <img
          src={item.src ? item.src : "/images/poster_undefined.png"}
          alt=""
        />
      </a>
      {/* 우측 게시글 영역 */}
      <div className="content-wrapper">
        <div className="inner-content">
          {/* 공연전시카테고리, 공연전시 제목 */}
          <div className="category-info">
            <CategoryBadge item={item} />
            <strong>[{item.ex_title}]</strong>
          </div>
          {/* 관람후기 제목, 미리보기 */}
          <a className="post_title" href={`/review_detail/${item.id}`}>
            {item.title}
          </a>
          <div
            className="post_content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
        {/* 작성자, 작성일, 조회수, 추천수 */}
        <ul className="post-info">
          <li className="author">
            <span className="gray">{item.author}</span>
          </li>
          <li>
            <img src="/images/ico_time.svg" />
            <span className="gray">{item.posted_at}</span>
          </li>
          <li>
            <img src="/images/ico_views.svg" />
            <span className="gray">{item.views}</span>
          </li>
          <li>
            <img className="like_btn" src="/images/ico_likes.svg" />
            <span className="gray">{item.likes}</span>
          </li>
        </ul>
      </div>
    </BoardListWrap>
  );
}

export default BoardList;
