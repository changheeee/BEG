import React from "react";
import styled from "styled-components";

const ExListPosterWrap = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  box-shadow: 4px 6px 6px 0px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function ExListPoster({ item }) {
  const imageSrc = item.src;

  return (
    <ExListPosterWrap href={`/ex_detail/${item.id}`}>
      {imageSrc && <img src={imageSrc} alt={imageSrc} />}
      {!imageSrc && (
        // 이미지가 없을 경우 플레이스홀더를 렌더링하거나 상황에 맞게 처리
        <img src="/images/poster_undefined.png" alt="이미지준비중" />
      )}
    </ExListPosterWrap>
  );
}
