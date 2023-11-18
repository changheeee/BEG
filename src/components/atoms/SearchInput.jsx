import React from "react";
import styled from "styled-components";

const SearchInputWrap = styled.div`
  display: flex;

  margin-left: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 0.75rem;
  letter-spacing: -0.04rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.3em;

  button {
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: #888;
  }
`;

export default function SearchInput({ toggleSearch }) {
  return (
    <SearchInputWrap>
      <img
        src="/images/ico_search_placeholder.svg"
        style={{ height: ".875rem", marginRight: ".25rem" }}
      />
      <input type="text" placeholder="공연・전시 검색" />
      <button onClick={toggleSearch}>X</button>
    </SearchInputWrap>
  );
}
