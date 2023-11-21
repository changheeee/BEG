import React from "react";
// import styled from "styled-components";
import ExTabMenu from "../organisms/ExTabMenu";
import { SectionContent } from "../atoms/SectionContent";
import SectionHeader from "../molecules/SectionHeader";

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
