import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoutBtn = styled(Link)`
  margin-right: 0.65rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: -0.04rem;
`;

export default function LogoutButton() {
  return (
    <div>
      <LogoutBtn to="/logout">LOGOUT</LogoutBtn>
    </div>
  );
}
