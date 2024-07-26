import React from "react";
import { Link } from "react-router-dom";

import { styled, createGlobalStyle } from "styled-components";

import CustomCalendar from "../components/calendar/CustomCalendar";
import CheckSchedule from "../components/CheckSchedule/CheckSchedule";
import SideSchedule from "../components/SideSchedule/SideSchedule";

const PageStyle = createGlobalStyle`
  body {
    background-color: #F7F8FB;
    margin: 0;
    padding: 0;
    display: flex;
    width: 1440px;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
`;

const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  width: 1140px;
`;

const CalendarFilter = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

const CalendarFilterText = styled.p`
  color: #000;
  font-family: "NanumSquareRound";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
`;

const CalendarFitlerContent = styled.div`
  display: flex;
  align-items: center;
  
  gap: 1rem;
`;

const CalendarFilterContentAll = styled.div`
  display: flex;

  color: #2D539E;

  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
`;

const CalendarFilterContentDe = styled.div`
  display: flex;
  
  color: #ABABAB;

  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;

  padding: 0.375rem 1.25rem;
  background-color: #FFF;
  border-radius: 100px;

  // background-color: #2D539E;
  // color: #FFF;
`;

const Calendars = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1rem;
`;

const SideSchedules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

function DatePage() {
  return (
    <>
      <PageStyle />
      <CheckSchedule></CheckSchedule>
      <Calendar>
        <CalendarFilter>
          <CalendarFilterText>언제나 든든한 나만의</CalendarFilterText>
          <CalendarFitlerContent>
            <CalendarFilterContentAll style={{marginLeft:8, marginRight:16}}>전체보기</CalendarFilterContentAll>
            <CalendarFilterContentDe>나</CalendarFilterContentDe>
            <CalendarFilterContentDe>엄마</CalendarFilterContentDe>
            <CalendarFilterContentDe>아빠</CalendarFilterContentDe>
          </CalendarFitlerContent>
        </CalendarFilter>
        <Calendars>
          <CustomCalendar></CustomCalendar>
          <SideSchedules>
            <SideSchedule></SideSchedule>
            <SideSchedule></SideSchedule>
            <SideSchedule></SideSchedule>
          </SideSchedules>
        </Calendars>
      </Calendar>
    </>
  );
}

export default DatePage;