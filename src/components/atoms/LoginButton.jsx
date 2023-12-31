import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginBtn = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: -0.04rem;
`;

export default function LoginButton({ scrollTopAndCloseMenu }) {
  return (
    <div>
      <LoginBtn to="/login" onClick={scrollTopAndCloseMenu}>
        LOGIN
      </LoginBtn>
    </div>
  );
}
