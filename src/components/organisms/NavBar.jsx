import { React, useState } from "react";
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

  @media (max-width: 768px) {
    display: none;
  }
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
  background: #fefefe;
  border-bottom: 0.5px solid #ccc;

  > a {
    height: 25px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
const MobileMenu = styled.div`
  position: fixed;
  top: 50px;
  padding: 20px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fefefedb;

  @media (min-width: 769px) {
    display: none;
  }
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
