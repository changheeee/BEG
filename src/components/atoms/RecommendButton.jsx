import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RecommendButtonWrap = styled.img`
  cursor: pointer;
`;

export default function RecommendButton({ recommended }) {
  const [recommend, setRecommend] = useState(false);

  // 컴포넌트가 렌더링될 때 recommended prop이 변경되면 recommend state 업데이트
  useEffect(() => {
    setRecommend(recommended);
  }, [recommended]);

  const imageUrl = recommend
    ? "/images/btn_recommended.svg"
    : "/images/btn_recommend.svg";

  const toggleRecommend = () => {
    setRecommend(!recommend);
  };

  return <RecommendButtonWrap src={imageUrl} onClick={toggleRecommend} />;
}
