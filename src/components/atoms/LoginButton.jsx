import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginBtn = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: -0.04rem;
`;

export default function LoginButton() {
  return (
    <div>
      <LoginBtn to="/login">LOGIN</LoginBtn>
    </div>
  );
}
