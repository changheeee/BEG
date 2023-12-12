import React from "react";
import styled from "styled-components";
import data from "../../MOCK_DATA.json";
import ListVertical from "../molecules/ListVertical";

const LoExListWrap = styled.div`
  width: 100%;
`;
const Title = styled.div`
  padding-top: 2rem;
  font-size: 1.25rem;
  letter-spacing: -0.05rem;

  strong {
    font-weight: 600;
    margin-right: 0.3rem;
  }
`;

const LoExList = styled.ul`
  margin-top: 1.25rem;
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;

  .no_data_text {
    width: 100%;
  }

  @media (max-width: 1919px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1560px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1200px) {
    gap: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > li:last-child {
      border-bottom: 0;
    }
  }
`;

export default function LoIngEx({ keyword }) {
  const filteredData = data.list.filter((item) => item.location === keyword);

  return (
    <LoExListWrap>
      {keyword && (
        <>
          <Title>
            <strong>{keyword}</strong>
            <span>에서 진행중인 공연・전시</span>
          </Title>
          <LoExList>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <ListVertical key={index} item={item} />
              ))
            ) : (
              <div className="no_data_text">
                진행중인 공연・전시가 없습니다.
              </div>
            )}
          </LoExList>
        </>
      )}
    </LoExListWrap>
  );
}
