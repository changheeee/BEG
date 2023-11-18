import { React, useState } from "react";
import styled from "styled-components";
import data from "../../MOCK_DATA.json";
import ExSortTab from "../atoms/ExSortTab";
import HorizontalCalendar from "../commons/HorizontalCalendar";
import ExCategoryTabMenu from "../molecules/ExCategoryTabMenu";
const TabContent = styled.div``;

export default function ExTabMenu() {
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
        {exNow && <ExCategoryTabMenu data={data} />}
        {!exNow && <HorizontalCalendar data={data} />}
      </TabContent>
    </>
  );
}
