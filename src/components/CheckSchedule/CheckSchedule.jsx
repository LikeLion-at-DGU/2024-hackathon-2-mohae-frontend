import React, { useState, useEffect } from "react";
import { API } from "../../api";
import * as S from "./Styled";

const CheckSchedule = () => {
  const [isSwiped, setIsSwiped] = useState(false);
  const [startX, setStartX] = useState(null);
  const [familyData, setFamilyData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchFamilyProfiles = async () => {
    try {
      const response = await API.get("/users/family");
      console.log("Family profiles:", response.data);
      const family = response.data.flatMap(family =>
        family.profiles.map(profile => ({
          nickname: profile.nickname,
          user_id: profile.user,
          family_id: family.family_id,
          schedules: [],
          appointments: [],
          medications: []
        }))
      );
      return family;
    } catch (error) {
      console.error("Error fetching family profiles:", error);
      return [];
    }
  };

  const fetchFamilyHealthData = async (familyId, memberId) => {
    try {
      const response = await API.get(`/cal/health/family/${familyId}/daily/${memberId}/`);
      console.log(`Health data for family ${familyId}, member ${memberId}:`, response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching health data for family ${familyId}, member ${memberId}:`, error);
      return { schedules: [], appointments: [], medications: [] };
    }
  };

  const fetchFamilyData = async () => {
    const familyProfiles = await fetchFamilyProfiles();
    const familyData = await Promise.all(familyProfiles.map(async member => {
      const healthData = await fetchFamilyHealthData(member.family_id, member.user_id);

      return {
        ...member,
        schedules: healthData.schedules || [],
        appointments: healthData.appointments || [],
        medications: healthData.medications || []
      };
    }));

    console.log("Complete family data:", familyData);
    setFamilyData(familyData);
  };

  useEffect(() => {
    fetchFamilyData();
  }, []);

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
    setActiveIndex((activeIndex + 1) % familyData.length);
  };

  return (
    <S.ScheduleContainer
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
    >
      <S.ScheduleText>
        {familyData.length > 0 ? `${familyData[activeIndex]?.nickname}의 오늘 모해?` : "나의 오늘 모해?"}
      </S.ScheduleText>
      <S.ArrowButton $left onClick={() => setActiveIndex((activeIndex - 1 + familyData.length) % familyData.length)}>
        <S.StyledLeftArrow />
      </S.ArrowButton>
      <S.ScheduleBoxes>
        {familyData.length > 0 && familyData[activeIndex] ? (
          <>
            <S.ScheduleBox>
              <S.ScheduleToday>오늘 일정</S.ScheduleToday>
              <S.ScheduleRow>
                {familyData[activeIndex].schedules.length > 0 ? (
                  familyData[activeIndex].schedules.map((schedule, index) => (
                    <div key={index}>
                      <S.ScheduleTitle>{schedule.title}</S.ScheduleTitle>
                      <S.ScheduleTime>
                        {new Date(schedule.start).toLocaleTimeString()} - {new Date(schedule.end).toLocaleTimeString()}
                      </S.ScheduleTime>
                    </div>
                  ))
                ) : (
                  <S.ScheduleTitle>일정 없음</S.ScheduleTitle>
                )}
              </S.ScheduleRow>
            </S.ScheduleBox>
            <S.ScheduleBox>
              <S.ScheduleToday>오늘 진료 내역</S.ScheduleToday>
              <S.ScheduleRow>
                {familyData[activeIndex].appointments.length > 0 ? (
                  familyData[activeIndex].appointments.map((appointment, index) => (
                    <div key={index}>
                      <S.ScheduleTitle>{appointment.name}</S.ScheduleTitle>
                      <S.ScheduleTime>
                        {new Date(appointment.appointment_datetime).toLocaleTimeString()}
                      </S.ScheduleTime>
                    </div>
                  ))
                ) : (
                  <S.ScheduleTitle>진료 내역 없음</S.ScheduleTitle>
                )}
              </S.ScheduleRow>
            </S.ScheduleBox>
            <S.ScheduleBox>
              <S.ScheduleToday>오늘 복용약</S.ScheduleToday>
              <S.ScheduleRow>
                {familyData[activeIndex].medications.length > 0 ? (
                  familyData[activeIndex].medications.map((medication, index) => (
                    <div key={index}>
                      <S.ScheduleTitle>{medication.name}</S.ScheduleTitle>
                      <S.ScheduleTime>
                        {medication.morning === "true" && "아침 "}
                        {medication.lunch === "true" && "점심 "}
                        {medication.dinner === "true" && "저녁 "}
                      </S.ScheduleTime>
                    </div>
                  ))
                ) : (
                  <S.ScheduleTitle>복용약 없음</S.ScheduleTitle>
                )}
              </S.ScheduleRow>
            </S.ScheduleBox>
          </>
        ) : (
          <S.ScheduleBox>
            <S.ScheduleToday>가족 데이터를 불러오는 중입니다...</S.ScheduleToday>
          </S.ScheduleBox>
        )}
      </S.ScheduleBoxes>
      <S.ArrowButton onClick={() => setActiveIndex((activeIndex + 1) % familyData.length)}>
        <S.StyledRightArrow />
      </S.ArrowButton>
    </S.ScheduleContainer>
  );
};

export default CheckSchedule;
