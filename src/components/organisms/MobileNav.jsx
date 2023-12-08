import React from "react";
import { styled } from "styled-components";

import LogoButton from "../atoms/LogoButton";
import MenuButton from "../atoms/MenuButton";
import SearchButton from "../atoms/SearchButton";
import LoginButton from "../atoms/LoginButton";
import LoggedIn from "../molecules/LoggedIn";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

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
  .menu_ico {
    cursor: pointer;
    font-size: 1.25rem;
    color: #555;

    &:hover {
      color: #000;
      scale: 1.1;
    }
  }
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
  /* justify-content: space-between; */
  background: #fefefeed;
  backdrop-filter: blur(3px);

  .user_fnc {
    align-self: flex-end;
    display: flex;
    align-items: flex-end;
    margin-bottom: 2.5rem;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

function MobileNav({ toggleMenu, isMenuOpen }) {
  const scrollTopAndCloseMenu = () => {
    window.scrollTo(0, 0);
    toggleMenu();
  };

  return (
    <>
      <MobileNavContainer>
        <LogoButton nav />
        <div onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoCloseOutline className="menu_ico" />
          ) : (
            <IoMenuOutline className="menu_ico" />
          )}
        </div>
        {isMenuOpen && (
          <MobileMenu>
            <div className="user_fnc">
              <LoggedIn scrollTopAndCloseMenu={scrollTopAndCloseMenu} />
              <LoggedIn
                loggedIn
                scrollTopAndCloseMenu={scrollTopAndCloseMenu}
              />
            </div>
            <MenuButton scrollTopAndCloseMenu={scrollTopAndCloseMenu} />
          </MobileMenu>
        )}
      </MobileNavContainer>
    </>
  );
}

export default MobileNav;
