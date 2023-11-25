import React from "react";

import { MainContent } from "../atoms/SectionContent";
import MainCarousel from "../organisms/MainCarousel";
import MainExBest from "../organisms/MainExBest";
import { MainContentTitle } from "../atoms/ContentTitle";
import data from "../../MOCK_DATA.json";

export default function Main() {
  return (
    <>
      <MainContent>
        <MainCarousel />
        <MainContentTitle>
          <h3 style={{ marginTop: "80px" }}>전시 랭킹</h3>
        </MainContentTitle>
        <MainExBest data={data} />
      </MainContent>
    </>
  );
}
