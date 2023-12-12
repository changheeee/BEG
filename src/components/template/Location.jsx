import React, { useState } from "react";
import { SectionContent } from "../atoms/SectionContent";
import SectionHeader from "../molecules/SectionHeader";
import { LocationContentTitle } from "../atoms/ContentTitle";
import MyLocation from "../atoms/MyLocation";

import LoIngEx from "../atoms/LoIngEx";
import Kakaomap from "../organisms/Kakaomap";

export default function Location() {
  return (
    <>
      <SectionHeader location />
      <SectionContent>
        <LocationContentTitle>
          <h3>내 주변 문화시설</h3>
          <MyLocation />
        </LocationContentTitle>
        <Kakaomap />
      </SectionContent>
    </>
  );
}
