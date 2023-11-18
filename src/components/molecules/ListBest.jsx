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

const Left = styled.div`
  width: 25%;
  height: 100%;
`;
const Right = styled.div`
  width: 75%;
`;

export default function ListBest() {
  return (
    <ListBestWrap>
      {data.posts.map((item, index) => (
        <ListBestContainer key={index}>
          <Left>
            <PosterCommunity>
              <ReviewPoster item={item} />
            </PosterCommunity>
          </Left>
          <Right>
            <div>
              <div>
                <CategoryBadge item={item} />
                {item.ex_title}
              </div>
              <p>{item.content}</p>
              <div>
                {item.author}
                <div>
                  <span>
                    <img src="/images/ico_views.svg" />
                    {item.views}
                  </span>
                  <span>
                    <img src="/images/ico_likes.svg" />
                    {item.likes}
                  </span>
                </div>
              </div>
            </div>
          </Right>
        </ListBestContainer>
      ))}
    </ListBestWrap>
  );
}
