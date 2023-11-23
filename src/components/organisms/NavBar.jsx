import { React, useState } from "react";
import styled from "styled-components";
import MobileNav from "./MobileNav";
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
  backdrop-filter: blur(3px);
  border-bottom: 0.5px solid #ccc;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
      <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </>
  );
}
