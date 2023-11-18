import React from "react";
import styled from "styled-components";

const LoginBtn = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: -0.04rem;
`;

export default function LoginButton() {
  return (
    <div>
      <LoginBtn href="/login">LOGIN</LoginBtn>
    </div>
  );
}
