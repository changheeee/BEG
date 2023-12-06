import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExListPosterWrap = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function ExListPoster({ item }) {
  const imageSrc = item.src;

  return (
    <ExListPosterWrap to={`/ex_detail/${item.id}`}>
      {imageSrc && <img src={imageSrc} alt={imageSrc} />}
      {!imageSrc && (
        // 이미지가 없을 경우 플레이스홀더를 렌더링하거나 상황에 맞게 처리
        <img src="/images/poster_undefined.png" alt="이미지준비중" />
      )}
    </ExListPosterWrap>
  );
}
