import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { styled } from "styled-components";
import moment from "moment";
import "../../assets/MainCalendar.css";
import ListCalendar from "../molecules/ListCalendar";
import DatePicker from "react-horizontal-datepicker";
import MoreButton from "../atoms/MoreButton";

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
    padding: 0 1rem;
    margin-top: 0;
    overflow: hidden;
    overflow-y: scroll;
  }
  @media (max-width: 768px) {
    border-top: 1px solid #ddd;

    /* border-top: 1px solid #ddd;
    margin-top: 1rem;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    height: auto;
    gap: 1.5rem; */
  }
`;

export default function MainDatePick({ data }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split(".");
    return new Date(`${year}-${month}-${day}`);
  };

  const sortedData = [...data.list].slice(0, 7);

  const filteredData = sortedData.filter(
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
          filteredData.map((item, index) => (
            <ListCalendar key={index} item={item} />
          ))
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
