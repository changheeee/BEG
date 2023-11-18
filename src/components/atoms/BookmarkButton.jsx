import React, { useState } from "react";
import styled from "styled-components";

const BookmarkButtonWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  border: 1px solid #ffbc6d;
  border-radius: 0.2rem;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: ${(props) => (props.isMarked ? "#ffbc6d" : "#fefefe")};
  color: ${(props) => (props.isMarked ? "#fefefe" : "#ffbc6d")};
  cursor: pointer;
`;

const BookmarkIcon = styled.img`
  margin-right: 0.2rem;
  width: auto;
  height: 0.75rem;
`;

export default function BookmarkButton({ isMarked }) {
  const [marked, setMarked] = useState(isMarked);

  const imageUrl = marked
    ? "/images/ico_bookmark_marked.svg"
    : "/images/ico_bookmark.svg";

  const handleToggleMark = () => {
    setMarked(!marked);
  };

  return (
    <BookmarkButtonWrap isMarked={marked} onClick={handleToggleMark}>
      <BookmarkIcon src={imageUrl} marked={marked} />
      북마크
    </BookmarkButtonWrap>
  );
}
