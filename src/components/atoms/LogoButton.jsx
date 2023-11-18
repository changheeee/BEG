import React from "react";
import styled from "styled-components";

const Logo = styled.a`
  /* background: url(${(props) => props.imageUrl}) cover; */
`;

export default function LogoButton({ nav }) {
  const imageUrl = nav ? "/images/logo_nav.svg" : "/images/logo_footer.svg";

  return (
    <Logo href="/">
      <img src={imageUrl} alt="로고 이미지" />
    </Logo>
  );
}
