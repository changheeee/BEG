import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { fetchListState, fetchTestState } from "../../stores/recoilState";

import { MainContent } from "../atoms/SectionContent";
import MainCarousel from "../organisms/MainCarousel";
import MainExBest from "../organisms/MainExBest";
import { MainContentTitle } from "../atoms/ContentTitle";

import MainDatePick from "../organisms/MainDatePick";
import MoreButton from "../atoms/MoreButton";
import MainNowEx from "../organisms/MainNowEx";
import MainUpcomingEx from "../organisms/MainUpcomingEx";

export default function Main() {
  // const testData = useRecoilValue(fetchTestState);
  // console.log(testData);
  const data = useRecoilValue(fetchListState);
  console.log(data);
  const [exNow, setExnow] = useState(true);
  const exNowHandler = () => {
    setExnow(!exNow);
  };

  const activeStyle = {
    color: "#333", // 선택된 탭의 색상
    fontWeight: "bold", // 선택된 탭의 폰트 두께
    cursor: "pointer",
    letterSpacing: "-0.04rem",
  };

  const inactiveStyle = {
    color: "#ccc", // 선택되지 않은 탭의 색상
    fontWeight: "normal", // 선택되지 않은 탭의 폰트 두께
    cursor: "pointer",
    letterSpacing: "-0.04rem",
  };

  return (
    <>
      <MainContent>
        <MainCarousel />
        <MainContentTitle>
          <h3 style={{ marginTop: "80px" }}>전시 랭킹</h3>
        </MainContentTitle>
        <MainExBest />
        <MainContentTitle>
          <h3 style={{ marginTop: "100px" }}>전시 캘린더</h3>
          <MoreButton />
        </MainContentTitle>
        <MainDatePick />
        <MainContentTitle>
          <h3 style={{ marginTop: "100px", display: "flex" }}>
            <p
              style={{
                ...(exNow ? activeStyle : inactiveStyle),
                marginRight: "1rem",
              }}
              onClick={exNowHandler}
            >
              지금 볼만한 전시
            </p>
            <p
              style={!exNow ? activeStyle : inactiveStyle}
              onClick={exNowHandler}
            >
              다가오는 전시
            </p>
          </h3>
        </MainContentTitle>

        {exNow ? <MainNowEx data={data} /> : <MainUpcomingEx data={data} />}
      </MainContent>

      {/* TEST */}
      {/* <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h3 style={{ fontSize: "2rem" }}>TEST</h3>
        {testData.map((item, index) => (
          <div key={index}>
            <h4 style={{ fontSize: "1.5rem" }}>DATA{index}</h4>
            <ul>
              <li>Category:{item.category ? item.category.name : null}</li>
              <li>Title: {item.title}</li>
              <li>AvgStar: {item.avg_star}</li>
              <li>Price: {item.price}</li>
            </ul>
          </div>
        ))}
      </div> */}
    </>
  );
}
