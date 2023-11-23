import { React, useState } from "react";
import BoardSearchInput from "../atoms/BoardSearchInput";
import WriteButton from "../atoms/WriteButton";
import { styled } from "styled-components";
import data from "../../MOCK_DATA.json";
import BoardSortedButton from "../atoms/BoardSortedButton";
import BoardList from "../atoms/BoardList";

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
`;

const BoardContent = styled.ul`
  padding-top: 1rem;
  width: 100%;
`;

export default function ReviewBoard() {
  const [sortType, setSortType] = useState("date");
  const POSTS = data.posts;

  let sortedData = [...POSTS];

  if (sortType === "likes") {
    sortedData.sort((a, b) => b.likes - a.likes);
  } else {
    sortedData.reverse();
  }

  return (
    <>
      <BoardHeader>
        <BoardSortedButton setSortType={setSortType} />
        <BoardSearchInput />
        <WriteButton />
      </BoardHeader>
      <BoardContent>
        {sortedData.map((item, index) => (
          <BoardList key={index} item={item} />
        ))}
      </BoardContent>
    </>
  );
}
