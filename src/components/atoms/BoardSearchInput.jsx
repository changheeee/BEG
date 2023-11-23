import React from "react";
import styled from "styled-components";

const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 30px;
  margin-left: 1rem;
  /* font-family: "Montserrat", sans-serif; */
  font-weight: 300;
  font-size: 0.875rem;
  letter-spacing: -0.04rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 0.3em;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export default function BoardSearchInput() {
  return (
    <SearchInputWrap>
      <img
        src="/images/ico_search_placeholder.svg"
        style={{ height: ".875rem", marginRight: ".25rem" }}
      />
      <input type="text" placeholder="공연・전시 검색" />
    </SearchInputWrap>
  );
}
