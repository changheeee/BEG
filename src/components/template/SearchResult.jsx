import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SectionHeader from "../molecules/SectionHeader";
import { SectionContent, DetailContent } from "../atoms/SectionContent";
import MOCK_DATA from "../../MOCK_DATA.json";
import ListVertical from "../molecules/ListVertical";
import { ExhibitionListWrap } from "../molecules/CurrentExhibitions";

export default function SearchResult() {
  const { id } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredResults = MOCK_DATA.list.filter(
      (item) => item.title.includes(id) || item.location.includes(id)
    );

    setFilteredData(filteredResults);
  }, [id]);

  return (
    <>
      <SectionHeader search searchKeyword={id} />
      <SectionContent>
        {filteredData.length > 0 ? (
          <>
            <p
              style={{
                borderBottom: "1.5px solid #ddd",
                paddingBottom: "0.5rem",
              }}
            >
              <strong style={{ fontWeight: "700", color: "#333" }}>
                "{id}"
              </strong>
              <span>에 대한 총 </span>
              <strong style={{ fontWeight: "600", color: "#333" }}>
                {filteredData.length}건
              </strong>
              <span>의 결과입니다.</span>
            </p>
            <ExhibitionListWrap>
              {filteredData.map((item, index) => (
                <ListVertical key={index} item={item} />
              ))}
            </ExhibitionListWrap>
          </>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </SectionContent>
    </>
  );
}
