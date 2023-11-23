import React from "react";
import BoardSearchInput from "../atoms/BoardSearchInput";
import WriteButton from "../atoms/WriteButton";
import { styled } from "styled-components";
import SortedButton from "../atoms/SortedButton";
import data from "../../MOCK_DATA.json";
import CategoryBadge from "../atoms/CategoryBadge";

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
`;

const BoardContent = styled.ul`
  padding-top: 1rem;
  width: 100%;

  > li {
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
      border: 1px solid red;

      .inner-content {
        display: flex;
        flex-direction: column;

        .category-info {
          display: flex;
          align-items: center;
        }
      }

      .post-info {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default function ReviewBoard() {
  const POSTS = data.posts.reverse();
  const EXLIST = data.list;

  return (
    <>
      <BoardHeader>
        <SortedButton />
        <BoardSearchInput />
        <WriteButton />
      </BoardHeader>
      <BoardContent>
        {POSTS.map((item, index) => (
          <li key={index}>
            <a className="poster" href={`/review_detail/${item.id}`}>
              <img
                src={item.src ? item.src : "/images/poster_undefined.png"}
                alt=""
              />
            </a>
            <div className="content-wrapper">
              <div className="inner-content">
                <div className="category-info">
                  <CategoryBadge item={item} />
                  <span>{item.ex_title}</span>
                </div>
                <a className="post_title" href={`/review_detail/${item.id}`}>
                  {item.title}
                </a>
                <p>{item.content}</p>
              </div>
              <div className="post-info">
                <span className="author">{item.author}</span>
                <span className="posted-at">{item.posted_at}</span>
                <span className="views">{item.views}</span>
                <span className="likes">{item.likes}</span>
              </div>
            </div>
          </li>
        ))}
      </BoardContent>
    </>
  );
}
