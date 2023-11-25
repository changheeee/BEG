import React from "react";

import { MainContent } from "../atoms/SectionContent";
import MainCarousel from "../organisms/MainCarousel";
import MainExBest from "../organisms/MainExBest";
import { ContentTitle } from "../atoms/ContentTitle";

export default function Main() {
  return (
    <>
      <MainContent>
        <MainCarousel />
        {/* <ContentTitle>
          <h3>BEST REVIEW</h3>
        </ContentTitle>
        <MainExBest /> */}
      </MainContent>
    </>
  );
}
