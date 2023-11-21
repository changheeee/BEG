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

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const FooterIn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: flex-start;

    flex-direction: column;
  }
`;

const Copyright = styled.span`
  color: #999999;
  letter-spacing: -0.04rem;

  @media (max-width: 768px) {
    padding-top: 0.5rem;
    font-size: 0.75rem;
  }
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
