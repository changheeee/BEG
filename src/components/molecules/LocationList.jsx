import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import Pagination from "../atoms/Pagination";
import { ListContainer, ListTr } from "../atoms/LocationContent";
import LoIngEx from "../atoms/LoIngEx";
import MOCK_DATA from "../../MOCK_DATA.json";

export default function LocationList({ psList, keyword, setKeyword }) {
  // 현재 페이지를 저장하는 state
  const [currentPage, setCurrentPage] = useState(0);

  // 페이지당 표시되는 장소의 수
  const PER_PAGE = 7;

  // 장소 목록 페이지 변경 시 호출되는 함수
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // 전체 페이지 수 계산
  const pageCount = Math.ceil(psList.length / PER_PAGE);

  // 현재 페이지에 표시되는 장소 목록
  const displayedList = psList.slice(
    currentPage * PER_PAGE,
    (currentPage + 1) * PER_PAGE
  );

  const clickKeywordHandler = (e) => {
    setKeyword(e.target.innerText);
  };

  console.log(displayedList);

  return (
    <>
      <ListContainer>
        <div>
          <div className="total_info">
            <h4>문화시설</h4>
            <span>총 {psList.length}건</span>
          </div>
          <ul className="list_header">
            <li>시설명</li>
            <li>주소</li>
            <li>전화번호</li>
            <li>상세정보</li>
          </ul>
          <ul className="list_body">
            {displayedList.map((v, index) => (
              <ListTr key={index}>
                <span
                  className="title_pointer"
                  onClick={(e) => {
                    clickKeywordHandler(e);
                  }}
                >
                  {v[0]}
                </span>
                <span>{v[1]}</span>
                <span>{v[2]}</span>
                <span className="detail_link">
                  <Link to={`/lo_detail/${v[0]}`} className="detail_btn">
                    상세보기
                  </Link>
                </span>
              </ListTr>
            ))}
          </ul>
        </div>
        <div className="pagination_wrap">
          {pageCount > 0 && (
            <Pagination
              pageCount={Math.max(1, pageCount - 1)}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          )}
        </div>
      </ListContainer>
      <LoIngEx keyword={keyword} />
    </>
  );
}
