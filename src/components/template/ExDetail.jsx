import React from "react";
import SectionHeader from "../molecules/SectionHeader";
import { DetailContent } from "../atoms/SectionContent";
import ExInfo from "../organisms/ExInfo";

export default function ExDetail() {
  return (
    <>
      <SectionHeader exhibition />
      <DetailContent>
        <ExInfo />
      </DetailContent>
    </>
  );
}
