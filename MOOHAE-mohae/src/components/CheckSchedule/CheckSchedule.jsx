import React, { useState } from "react";

import * as S from "./Styled";

const CheckSchedule = () => {
  const [isSwiped, setIsSwiped] = useState(false);
  const [startX, setStartX] = useState(null);

  const schedules = [
    { title: "직장 동료와의 모임 약속", time: "18:00 ~ 22:00" },
    { title: "아침 공복 유산균 먹기", time: "08:00 ~ 08:30" },
    { title: "필라테스 1:1 수업", time: "18:00 ~ 22:00" }
  ];

  const swipeSchedules = [
    { title: "새로운 일정 1", time: "118:00 ~ 22:00" },
    { title: "새로운 일정 2", time: "08:00 ~ 08:30" },
    { title: "새로운 일정 3", time: "18:00 ~ 22:00" }
  ];

  const handleSwipeStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleSwipeEnd = (e) => {
    if (startX === null) return;

    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      toggleSwipe();
    }

    setStartX(null);
  };

  const toggleSwipe = () => {
    setIsSwiped(prevIsSwiped => !prevIsSwiped);
  };

  const currentSchedules = isSwiped ? swipeSchedules : schedules;
  const currentBackgroundColor = isSwiped ? '#FBE8F5' : '#2D539E';
  const textColor = isSwiped ? '#000000' : '#FFFFFF';

  return (
    <S.ScheduleContainer 
      $bgColor={currentBackgroundColor}
      key={isSwiped ? 'swiped' : 'default'}
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
    >
      <S.ScheduleText style={{ color: textColor }}>내 일정 확인하기</S.ScheduleText>
      <S.ArrowButton $left onClick={toggleSwipe}>{'<'}</S.ArrowButton>
      <S.ScheduleBoxes>
        {currentSchedules.map((schedule, index) => (
          <S.ScheduleBox key={index}>
            <S.ScheduleToday>오늘의 모해?</S.ScheduleToday>
            <S.ScheduleRow>
              <S.ScheduleTitle>{schedule.title}</S.ScheduleTitle>
              <S.ScheduleTime>{schedule.time}</S.ScheduleTime>
            </S.ScheduleRow>
          </S.ScheduleBox>
        ))}
      </S.ScheduleBoxes>
      <S.ArrowButton onClick={toggleSwipe}>{'>'}</S.ArrowButton>
    </S.ScheduleContainer>
  );
};

export default CheckSchedule;