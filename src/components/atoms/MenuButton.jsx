import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 다른 이름으로 변경하거나, 다른 파일에서 import
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

export default function MenuButton() {
  return (
    <Menu>
      <li>
        <Link to="/exhibition">공연・전시</Link>
      </li>
      <li>
        <Link to="">공연・전시공간</Link>
      </li>
      <li>
        <Link to="/community">커뮤니티</Link>
      </li>
      <li>
        <Link to="">소개</Link>
      </li>
    </Menu>
  );
}
