import React from "react";
// import styled from "styled-components";
import SectionContent from "../atoms/SectionContent";
import SectionHeader from "../molecules/SectionHeader";
import ListBest from "../molecules/ListBest";

export default function Community() {
  return (
    <>
      <SectionHeader community />
      <SectionContent>
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              marginBottom: ".5rem",
              fontSize: "1.875rem",
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: "700",
            }}
          >
            BEST REVIEW
          </h3>
          <strong
            style={{
              fontSize: "1.35rem",
              fontWeight: "500",
            }}
          >
            가장 인기있는 후기입니다
          </strong>
        </div>
        <ListBest />
      </SectionContent>
    </>
  );
}
