import React from "react";

import * as S from "./Styled";

const CheckSchedule = () => {
  return (
    <>
      <S.ScheduleContainer>
        <S.ScheduleText>
          내 일정 확인하기
        </S.ScheduleText>
        <S.ScheduleBoxes>
          <S.ScheduleBox>
            <S.ScheduleToday>오늘의 일정</S.ScheduleToday>
            <S.ScheduleRow>
              <S.ScheduleTitle>직장 동료와의 모임 약속</S.ScheduleTitle>
              <S.ScheduleTime>18:00 ~ 22:00</S.ScheduleTime>
            </S.ScheduleRow>
          </S.ScheduleBox>
          <S.ScheduleBox>
            <S.ScheduleToday>오늘의 일정</S.ScheduleToday>
            <S.ScheduleRow>
              <S.ScheduleTitle>직장 동료와의 모임 약속</S.ScheduleTitle>
              <S.ScheduleTime>18:00 ~ 22:00</S.ScheduleTime>
            </S.ScheduleRow>
          </S.ScheduleBox>
          <S.ScheduleBox>
            <S.ScheduleToday>오늘의 일정</S.ScheduleToday>
            <S.ScheduleRow>
              <S.ScheduleTitle>직장 동료와의 모임 약속</S.ScheduleTitle>
              <S.ScheduleTime>18:00 ~ 22:00</S.ScheduleTime>
            </S.ScheduleRow>
          </S.ScheduleBox>
        </S.ScheduleBoxes>
      </S.ScheduleContainer>
    </>
  )

}

export default CheckSchedule;