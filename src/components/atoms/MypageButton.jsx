import React from "react";
import styled from "styled-components";

const MypageBtn = styled.a`
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: -0.04rem;
`;

export default function MypageButton() {
  return (
    <div>
      <MypageBtn href="/mypage">
        {/* <img
          src="/images/ico_my.svg"
          style={{ height: "16px", marginRight: ".2em" }}
        /> */}
        MY
      </MypageBtn>
    </div>
  );
}
