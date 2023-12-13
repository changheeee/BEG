// SearchButton 컴포넌트
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const SearchWrap = styled.div`
  display: flex;
`;

const SearchBtn = styled.button`
  cursor: pointer;
  display: ${(props) => (props.show ? "none" : "flex")};
  width: 20px;
  height: 20px;
  background: url("/images/ico_search.svg") no-repeat center center;
  background-size: cover;
`;

export default function SearchButton() {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = (searchTerm) => {
    // 검색어를 받아와서 검색 결과 페이지로 이동
    navigate(`/search_result/${searchTerm}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputRef.current.value.length >= 2) {
      // 엔터 키를 눌렀고, 검색어가 2글자 이상일 때 검색 결과 페이지로 이동
      handleSearch(inputRef.current.value);
      setShowSearch(!showSearch);
    }
  };

  return (
    <SearchWrap>
      <SearchBtn show={showSearch} onClick={toggleSearch}></SearchBtn>
      {showSearch && (
        <SearchInput
          toggleSearch={toggleSearch}
          inputRef={inputRef}
          handleKeyDown={handleKeyDown}
        />
      )}
    </SearchWrap>
  );
}
