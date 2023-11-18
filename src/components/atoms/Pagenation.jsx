import React from "react";
import styled from "styled-components";

const PageButton = styled.button`
  margin: 0 5px;
`;

export default function Pagination({ totalPosts, postsPerPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {pageNumbers.map((number) => (
          <li key={number}>
            <PageButton onClick={() => paginate(number)}>{number}</PageButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
