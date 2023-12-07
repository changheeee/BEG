import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MypageBtn = styled(Link)`
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: -0.04rem;
`;

export default function MypageButton() {
  return (
    <div>
      <MypageBtn to="/mypage">MY</MypageBtn>
    </div>
  );
}
