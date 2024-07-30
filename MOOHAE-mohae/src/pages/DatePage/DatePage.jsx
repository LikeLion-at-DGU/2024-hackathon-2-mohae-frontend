import React from "react";
import { Link } from "react-router-dom";

import * as S from "./Styled";

import CustomCalendar from "../../components/calendar/CustomCalendar";
import CheckSchedule from "../../components/CheckSchedule/CheckSchedule";
import SideSchedule from "../../components/SideSchedule/SideSchedule";

const DatePage = () => {
  return (
    <>
      <S.PageStyle />
      <CheckSchedule></CheckSchedule>
      <S.Calendar>
        <S.CalendarFilter>
          <S.CalendarFilterText>언제나 든든한 나만의</S.CalendarFilterText>
          <S.CalendarFitlerContent>
            <S.CalendarFilterContentAll style={{marginLeft:8, marginRight:16}}>전체보기</S.CalendarFilterContentAll>
            <S.CalendarFilterContentDe>나</S.CalendarFilterContentDe>
            <S.CalendarFilterContentDe>엄마</S.CalendarFilterContentDe>
            <S.CalendarFilterContentDe>아빠</S.CalendarFilterContentDe>
          </S.CalendarFitlerContent>
        </S.CalendarFilter>
        <S.Calendars>
          <CustomCalendar />
        </S.Calendars>
      </S.Calendar>
    </>
  );
}

export default DatePage;