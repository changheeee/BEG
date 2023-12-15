import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { fetchListState } from "../../stores/recoilState";

import SectionHeader from "../molecules/SectionHeader";
import { DetailContent } from "../atoms/SectionContent";
import ExInfo from "../organisms/ExInfo";
import ExReservationInfo from "../organisms/ExReservationInfo";
import MoreInfoTabMenu from "../organisms/MoreInfoTabMenu";

export default function ExDetail() {
  const { id } = useParams();
  const listData = useRecoilValue(fetchListState);
  const [data, setData] = useState(null);

  useEffect(() => {
    const foundData = listData.find((item) => item.id === parseInt(id));
    setData(foundData);
  }, [id]);

  if (!data) return null;

  return (
    <>
      <SectionHeader exhibition />
      <DetailContent>
        <ExInfo data={data} />
        <ExReservationInfo data={data} />
        <MoreInfoTabMenu data={data} />
      </DetailContent>
    </>
  );
}
