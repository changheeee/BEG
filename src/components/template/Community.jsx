import React from "react";
import styled from "styled-components";
import { SectionContent } from "../atoms/SectionContent";
import SectionHeader from "../molecules/SectionHeader";
import ListBest from "../molecules/ListBest";
import { ContentTitle } from "../atoms/ContentTitle";
import ReviewBoard from "../organisms/ReviewBoard";

export default function Community() {
  return (
    <>
      <SectionHeader community />
      <SectionContent>
        <ContentTitle>
          <h3>BEST REVIEW</h3>
          <strong>가장 인기있는 후기입니다</strong>
        </ContentTitle>
        <ListBest />
        <ContentTitle>
          <h3>관람후기</h3>
          <strong>경험한 이야기를 들려주세요</strong>
        </ContentTitle>
        <ReviewBoard />
      </SectionContent>
    </>
  );
}
