import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { styled } from "styled-components";
import moment from "moment";
import "../../assets/MainCalendar.css";
import ListCalendar from "../molecules/ListCalendar";

const MainDatePickWrap = styled.div`
  display: flex;
  padding: 1.5rem 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const ListContainer = styled.ul`
  flex: 1;
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
  height: 350px;
  padding: 1rem;

  @media (max-width: 1400px) {
    overflow: hidden;
    overflow-y: scroll;
  }
`;

export default function MainDatePick({ data }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split(".");
    return new Date(`${year}-${month}-${day}`);
  };

  const sortedData = [...data.list].slice(0, 5);

  const filteredData = sortedData.filter(
    (item) =>
      (formatDate(item.start) <= selectedDate &&
        formatDate(item.end) >= selectedDate) ||
      formatDate(item.start).toDateString() === selectedDate.toDateString() ||
      formatDate(item.end).toDateString() === selectedDate.toDateString()
  );

  return (
    <MainDatePickWrap>
      <Calendar
        onChange={setSelectedDate}
        formatDay={(locale, date) => moment(date).format("DD")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        locale="en-US"
        value={selectedDate}
      />
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
    </MainDatePickWrap>
  );
}
