import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled(Link)`
  display: block;
  height: auto;
  > img {
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 25px;
  }
`;

export default function LogoButton({ nav }) {
  const imageUrl = nav ? "/images/logo_nav.svg" : "/images/logo_footer.svg";

  return (
    <Logo to="/">
      <img src={imageUrl} alt="로고 이미지" />
    </Logo>
  );
}
