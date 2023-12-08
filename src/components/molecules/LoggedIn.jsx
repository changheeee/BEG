import React from "react";
import styled from "styled-components";
import LogoutButton from "../atoms/LogoutButton";
import MypageButton from "../atoms/MypageButton";
import LoginButton from "../atoms/LoginButton";

const LoggedInWrap = styled.div`
  display: flex;
  margin-left: 1rem;
  font-size: 0.875rem;
`;

export default function LoggedIn({ loggedIn, scrollTopAndCloseMenu }) {
  return (
    <LoggedInWrap>
      {loggedIn ? (
        <>
          <LogoutButton />
          <MypageButton scrollTopAndCloseMenu={scrollTopAndCloseMenu} />
        </>
      ) : (
        <LoginButton scrollTopAndCloseMenu={scrollTopAndCloseMenu} />
      )}
    </LoggedInWrap>
  );
}
