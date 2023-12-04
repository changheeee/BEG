import { React, useState } from "react";
import { useRecoilValue } from "recoil"; // Recoil 훅 추가
import { fetchListState } from "../../stores/recoilState"; // fetchListState import

import styled from "styled-components";
import ExSortTab from "../atoms/ExSortTab";
import UpcomingExhibitions from "../commons/UpcomingExhibitions";
import CurrentExhibitions from "../molecules/CurrentExhibitions";
const TabContent = styled.div``;

export default function ExTabMenu() {
  const data = useRecoilValue(fetchListState); // Recoil에서 데이터 가져오기
  const [exNow, setExNow] = useState(true);

  const handleSortChange = (isExNow) => {
    setExNow(isExNow);
    // 여기에서 정렬에 따른 데이터 변경 또는 API 호출을 수행할 수 있습니다.
    // 예: fetchData(isExNow ? "now" : "upcoming");
  };
  return (
    <>
      <ExSortTab exNow={exNow} handleSortChange={handleSortChange} />
      <TabContent>
        {exNow && <CurrentExhibitions data={data} />}
        {!exNow && <UpcomingExhibitions data={data} />}
      </TabContent>
    </>
  );
}
