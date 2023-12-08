import React from "react";
import { useRecoilValue } from "recoil";
import { fetchPostsState } from "../../stores/recoilState";

import SectionHeader from "../molecules/SectionHeader";
import { SectionContent } from "../atoms/SectionContent";
import { ContentTitle } from "../atoms/ContentTitle";
import ListBest from "../molecules/ListBest";
import ReviewBoard from "../organisms/ReviewBoard";

export default function Community() {
  const data = useRecoilValue(fetchPostsState);

  return (
    <>
      <SectionHeader community />
      <SectionContent>
        <ContentTitle>
          <h3>BEST REVIEW</h3>
          <strong>가장 인기있는 후기입니다</strong>
        </ContentTitle>
        <ListBest data={data} />
        <ContentTitle>
          <h3>관람후기</h3>
          <strong>경험한 이야기를 들려주세요</strong>
        </ContentTitle>
        <ReviewBoard data={data} />
      </SectionContent>
    </>
  );
}
