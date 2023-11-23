import React from "react";
import { styled } from "styled-components";

import LogoButton from "../atoms/LogoButton";
import MenuButton from "../atoms/MenuButton";
import SearchButton from "../atoms/SearchButton";
import LoginButton from "../atoms/LoginButton";
import LoggedIn from "../molecules/LoggedIn";

// 모바일 네비게이션
const MobileNavContainer = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fefefedb;
  backdrop-filter: blur(3px);
  border-bottom: 0.5px solid #ccc;

  > a {
    height: 25px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
const MobileMenu = styled.div`
  z-index: 9998;
  position: fixed;
  top: 50px;
  padding: 20px;
  left: 0;
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fefefeed;
  backdrop-filter: blur(3px);

  @media (min-width: 769px) {
    display: none;
  }
`;

function MobileNav({ toggleMenu, isMenuOpen }) {
  return (
    <>
      <MobileNavContainer>
        <LogoButton nav />
        <div onClick={toggleMenu}>메뉴</div>
      </MobileNavContainer>
      {isMenuOpen && (
        <MobileMenu>
          <MenuButton />
          <LoggedIn />
        </MobileMenu>
      )}
    </>
  );
}

export default MobileNav;
