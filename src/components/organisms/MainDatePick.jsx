import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil"; // Recoil 훅 추가

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { styled } from "styled-components";
import moment from "moment";
import "../../assets/MainCalendar.css";
import ListCalendar from "../molecules/ListCalendar";
import DatePicker from "react-horizontal-datepicker";
import MoreButton from "../atoms/MoreButton";
import { fetchListState } from "../../stores/recoilState"; // fetchListState import

const MainDatePickWrap = styled.div`
  display: flex;
  padding: 1.5rem 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
    border-bottom: none;

    .more-button {
      align-self: flex-end;
      display: inline-flex;
      margin-right: 1rem;
    }
  }
`;

const ListContainer = styled.ul`
  flex: 1;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  flex-wrap: wrap;
  height: 350px;
  padding: 1rem;
  margin-top: 1rem;

  @media (max-width: 1400px) {
    margin-top: 2rem;
    padding: 0 1rem;
    margin-top: 0;
    overflow: hidden;
    overflow-y: scroll;
  }
  @media (max-width: 768px) {
    margin: 1.5rem 0 1rem 0;
    border-top: 1px solid #ddd;
    overflow: auto;
    overflow-y: unset;

    /* border-top: 1px solid #ddd;
    margin-top: 1rem;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    height: auto;
    gap: 1.5rem; */
  }
`;

export default function MainDatePick() {
  const data = useRecoilValue(fetchListState); // Recoil에서 데이터 가져오기

  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split(".");
    return new Date(
      `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
    );
  };

  const filteredData = data.filter(
    (item) =>
      (formatDate(item.start) <= selectedDate &&
        formatDate(item.end) >= selectedDate) ||
      formatDate(item.start).toDateString() === selectedDate.toDateString() ||
      formatDate(item.end).toDateString() === selectedDate.toDateString()
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <MainDatePickWrap>
      {!isMobile ? (
        <Calendar
          onChange={setSelectedDate}
          formatDay={(locale, date) => moment(date).format("DD")}
          formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
          locale="en-US"
          value={selectedDate}
        />
      ) : (
        <DatePicker
          getSelectedDay={setSelectedDate}
          labelFormat={"MMMM"}
          color={"#555"}
          endDate={365}
          selectDate={selectedDate}
        />
      )}

      <ListContainer>
        {filteredData.length > 0 ? (
          filteredData
            .slice(0, 6)
            .map((item, index) => <ListCalendar key={index} item={item} />)
        ) : (
          <p>{`${moment(selectedDate).format(
            "YYYY년 MM월 DD일"
          )}에 진행하는 전시・공연이 없습니다.`}</p>
        )}
      </ListContainer>

      {isMobile && (
        <div className="more-button">
          <MoreButton />
        </div>
      )}
    </MainDatePickWrap>
  );
}
