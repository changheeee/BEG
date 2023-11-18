import React from "react";
import styled from "styled-components";
import LogoButton from "../atoms/LogoButton";
import MenuButton from "../atoms/MenuButton";
import SearchButton from "../atoms/SearchButton";
import LoginButton from "../atoms/LoginButton";
import LoggedIn from "../molecules/LoggedIn";

const NavContainer = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: #fefefedb;
  border-bottom: 0.5px solid #ccc;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;

  /* @media (max-width: 1024px) {
    align-items: flex-start;
    flex-direction: column;
  } */
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

export default function NavBar() {
  return (
    <NavContainer>
      <NavLeft>
        <LogoButton nav />
        <MenuButton />
      </NavLeft>
      <NavRight>
        <SearchButton />
        {/* <LoggedIn /> */}
        <LoggedIn loggedIn />
      </NavRight>
    </NavContainer>
  );
}
