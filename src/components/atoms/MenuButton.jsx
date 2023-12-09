import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.ul`
  display: flex;
  margin-left: 1.5rem;
  li {
    margin-right: 1.2rem;
  }
  li:last-child {
    margin-right: 0;
  }
  li:hover {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    li {
      margin-right: 0;
    }
  }
`;

export default function MenuButton({ scrollTopAndCloseMenu }) {
  return (
    <Menu>
      <li>
        <Link to="/exhibition" onClick={scrollTopAndCloseMenu}>
          공연・전시
        </Link>
      </li>
      <li>
        <Link to="/location" onClick={scrollTopAndCloseMenu}>
          공연・전시공간
        </Link>
      </li>
      <li>
        <Link to="/community" onClick={scrollTopAndCloseMenu}>
          커뮤니티
        </Link>
      </li>
      <li>
        <Link to="" onClick={scrollTopAndCloseMenu}>
          소개
        </Link>
      </li>
    </Menu>
  );
}
