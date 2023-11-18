import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const SearchWrap = styled.div`
  display: flex;
`;

const SearchBtn = styled.button`
  cursor: pointer;
  display: ${(props) => (props.showSearch ? "none" : "flex")};
  width: 20px;
  height: 20px;
  background: url("/images/ico_search.svg") no-repeat center center;
  background-size: cover;
`;

export default function SearchButton() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <SearchWrap>
      <SearchBtn showSearch={showSearch} onClick={toggleSearch}></SearchBtn>
      {showSearch && <SearchInput toggleSearch={toggleSearch} />}
    </SearchWrap>
  );
}
