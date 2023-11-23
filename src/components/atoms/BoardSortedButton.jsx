import React, { useState } from "react";
import styled from "styled-components";

const SortedButtonWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const SortButtonTitle = styled.div`
  cursor: pointer;
  letter-spacing: -0.04rem;
  font-size: 0.85rem;

  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#333" : "#ccc")};
`;

export default function BoardSortedButton({ setSortType }) {
  const [postNow, setPostNow] = useState(true);

  const handleSortChange = (isPostNow) => {
    setPostNow(isPostNow);
    setSortType(isPostNow ? "date" : "likes");
  };

  return (
    <SortedButtonWrap>
      <SortButtonTitle active={postNow} onClick={() => handleSortChange(true)}>
        최신순
      </SortButtonTitle>
      <SortButtonTitle
        active={!postNow}
        onClick={() => handleSortChange(false)}
      >
        랭킹순
      </SortButtonTitle>
    </SortedButtonWrap>
  );
}
