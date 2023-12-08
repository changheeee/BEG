import { React, useState } from "react";
import { useRecoilValue } from "recoil";
import { fetchListState } from "../../stores/recoilState";

import styled from "styled-components";
import ExSortTab from "../atoms/ExSortTab";
import UpcomingExhibitions from "../commons/UpcomingExhibitions";
import CurrentExhibitions from "../molecules/CurrentExhibitions";
const TabContent = styled.div``;

export default function ExTabMenu() {
  const data = useRecoilValue(fetchListState);
  const [exNow, setExNow] = useState(true);

  const handleSortChange = (isExNow) => {
    setExNow(isExNow);
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
