import React from "react";
import styled from "styled-components";
import LogoButton from "../atoms/LogoButton";

const FooterWrap = styled.div`
  padding: 0 100px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: #333;
`;

const FooterIn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Copyright = styled.span`
  color: #999999;
  letter-spacing: -0.04rem;
`;

export default function Footer() {
  return (
    <div>
      <FooterWrap>
        <FooterIn>
          <LogoButton />
          <Copyright>
            Copyright @ Busan Exhibition Guide. All Rights Reserved.
          </Copyright>
        </FooterIn>
      </FooterWrap>
    </div>
  );
}
