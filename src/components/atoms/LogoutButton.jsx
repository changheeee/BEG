import React from "react";
import styled from "styled-components";

const LogoutBtn = styled.a`
  margin-right: 0.65rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: -0.04rem;
`;

export default function LogoutButton() {
  return (
    <div>
      <LogoutBtn href="/logout">LOGOUT</LogoutBtn>
    </div>
  );
}
