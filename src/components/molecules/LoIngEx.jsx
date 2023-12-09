import React from "react";
import styled from "styled-components";
// import GoogleMap from "../atoms/GoogleMap";
import data from "../../MOCK_DATA.json";
import ListVertical from "./ListVertical";
// import { useState } from "react";

const Title = styled.div`
  font-size: 1.125rem;
  padding: 1rem 0px;
  letter-spacing: -0.05rem;

  strong {
    font-weight: 600;
    margin-right: 0.3rem;
  }
`;

const LoExList = styled.ul`
  margin-top: 1.25rem;
  display: flex;
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
`;

export default function LoIngEx({ keyword }) {
  // const [pickLo, setPickLo] = useState("부산시립미술관");
  // const [pickLo, setPickLo] = useState(keyword);

  // const [count, setCount] = useState(0);

  // const sortedData = data.list.filter();

  return (
    <>
      {keyword && (
        <>
          <Title>
            <strong>{keyword}</strong>
            <span>에서 진행중인 공연・전시</span>
          </Title>
          <LoExList>
            {/* 데이서 전체를 맵핑하고 조건문을 넣는게 아닌 조건으로 필터링 한 데이터를 맵핑하도록 해야할듯 */}
            {data.list.map((item, index) => {
              if (item.location == keyword) {
                return <ListVertical key={index} item={item} />;
              }
            })}
          </LoExList>
        </>
      )}
    </>
  );
}
