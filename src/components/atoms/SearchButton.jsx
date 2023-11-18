import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";

// 스타일드 컴포넌트를 사용하여 스타일을 정의
const SearchWrap = styled.div`
  display: flex;
`;

const SearchBtn = styled.button`
  cursor: pointer;
  /* showSearch prop에 따라 버튼을 표시 또는 숨김 */
  display: ${(props) => (props.showSearch ? "none" : "flex")};
  width: 20px;
  height: 20px;
  background: url("/images/ico_search.svg") no-repeat center center;
  background-size: cover;
`;

// SearchButton 컴포넌트 정의
export default function SearchButton() {
  // showSearch 상태와 이를 업데이트할 toggleSearch 함수 정의
  const [showSearch, setShowSearch] = useState(false);

  // 검색 버튼 클릭 시 showSearch 상태를 토글하는 함수
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // JSX를 사용하여 UI를 렌더링
  return (
    <SearchWrap>
      {/* 검색 버튼 컴포넌트 렌더링, 클릭 시 toggleSearch 함수 호출 */}
      <SearchBtn showSearch={showSearch} onClick={toggleSearch}></SearchBtn>

      {/* showSearch가 true일 때 SearchInput 컴포넌트 렌더링 */}
      {showSearch && <SearchInput toggleSearch={toggleSearch} />}
    </SearchWrap>
  );
}
