import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ReviewPosterWrap = styled(Link)`
  display: block;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function ReviewPoster({ item }) {
  const imageSrc = item.src;

  return (
    <div>
      <ReviewPosterWrap to={`/review_detail/${item.id}`}>
        {imageSrc && <img src={imageSrc} alt={imageSrc} />}
        {!imageSrc && (
          // 이미지가 없을 경우 플레이스홀더를 렌더링하거나 상황에 맞게 처리
          <img src="/images/poster_undefined.png" alt="이미지준비중" />
        )}
      </ReviewPosterWrap>
    </div>
  );
}
