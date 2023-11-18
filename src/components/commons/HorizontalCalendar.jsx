import React, { useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import styled from "styled-components";
import ExCalendarTabMenu from "../molecules/ExCalendarTabMenu";

const DatePickerWrap = styled.div`
  margin-top: 1.25rem;
  border-top: 1px solid #ccc;
  padding: 0.875rem 0;
`;

export default function HorizontalCalendar({ data }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const selectedDay = (val) => {
    setSelectedDate(new Date(val));
  };

  return (
    <>
      <DatePickerWrap>
        <DatePicker
          getSelectedDay={selectedDay}
          labelFormat={"MMMM"}
          color={"#555"}
          endDate={365}
          selectDate={selectedDate}
        />
      </DatePickerWrap>
      <ExCalendarTabMenu data={data} selectedDate={selectedDate} />
    </>
  );
}
