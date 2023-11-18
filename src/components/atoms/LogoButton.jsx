import React from "react";
import styled from "styled-components";

// 다른 이름으로 변경하거나, 다른 파일에서 import
const Logo = styled.a`
  background: url(${(props) => props.imageUrl}) cover;
`;

export default function LogoButton({ nav }) {
  const imageUrl = nav ? "/images/logo_nav.svg" : "/images/logo_footer.svg";

  return (
    <Logo imageUrl={imageUrl} href="/">
      <img src={imageUrl} alt="로고 이미지" />
    </Logo>
  );
}
