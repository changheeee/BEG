import React from "react";
import SectionHeader from "../molecules/SectionHeader";
import { SectionContent } from "../atoms/SectionContent";
import ExTabMenu from "../organisms/ExTabMenu";

export default function Exhibition() {
  return (
    <>
      <SectionHeader exhibition />
      <SectionContent>
        <ExTabMenu />
      </SectionContent>
    </>
  );
}
