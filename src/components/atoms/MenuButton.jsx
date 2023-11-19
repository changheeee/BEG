import React from "react";
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
        <a href="/exhibition">공연・전시</a>
      </li>
      <li>
        <a href="">공연・전시공간</a>
      </li>
      <li>
        <a href="/community">커뮤니티</a>
      </li>
      <li>
        <a href="">소개</a>
      </li>
    </Menu>
  );
}
