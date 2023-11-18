import React from "react";
import styled from "styled-components";
import { PosterCommunity } from "../atoms/PosterStyle";
import data from "../../MOCK_DATA.json";
import ReviewPoster from "../atoms/ReviewPoster";

const ListBestWrap = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid red;
  > li:nth-child(3),
  > li:nth-child(4) {
    margin-top: 20px;
  }
`;

const ListBestContainer = styled.li`
  width: 48%;
  border: 1px solid blue;
`;

const Left = styled.div`
  width: 35%;
`;
const Right = styled.div``;

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
          <Right></Right>
        </ListBestContainer>
      ))}
    </ListBestWrap>
  );
}
