import React from "react";
import styled from "styled-components";

const RecommendButtonWrap = styled.img`
  height: 25px;
  cursor: pointer;
`;

export default function RecommendButton({ recommended }) {
  const imageUrl = recommended
    ? "/images/btn_recommended.svg"
    : "/images/btn_recommend.svg";

  return <RecommendButtonWrap src={imageUrl} />;
}
