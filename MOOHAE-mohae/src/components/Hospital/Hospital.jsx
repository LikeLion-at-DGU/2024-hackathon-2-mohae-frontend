import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from "../../assets/Calendar.png";
import * as S from "./Styled";

const Hospital = () => {
  const [events, setEvents] = useState([
    { title: '물리치료 예약', start: '2024-07-30T15:00', location: '서울대병원' },
    { title: '정기검진', start: '2024-07-30T17:00', location: '서울대병원' },
  ]);

  const [newEvent, setNewEvent] = useState({ title: '', start: '', location: '' });
  const [showForm, setShowForm] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dayWeek = Array.from({ length: 7 }, (_, i) => {
    const day = new Date();
    day.setDate(day.getDate() - day.getDay() + i);
    return day;
  });

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const calculateEventPosition = (start) => {
    if (!start) return { top: 0 };
    const startDate = new Date(start);
    const startHour = startDate.getHours();
    const startMinute = startDate.getMinutes();
    const top = (startHour * 60 + startMinute) / (24 * 60) * 100;
    return { top };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleDateChange = (date) => {
    setNewEvent({ ...newEvent, start: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { ...newEvent, start: new Date(newEvent.start), end: new Date(newEvent.end) }]);
    setNewEvent({ title: '', start: '', end: '', location: '' });
    setShowForm(false);
  };

  return (
    <S.bigBox>
      <S.HospitalTitle>병원진료 예약</S.HospitalTitle>
      <S.HospitalContent>
        <S.IMG src={Calendar} alt="Calendar" />
        {today.getMonth() + 1}월
      </S.HospitalContent>
      <S.AddEventButton onClick={() => setShowForm(true)}>일정 추가</S.AddEventButton>
      <S.HospitalContainer>
        <S.HospitalHeader>
          {dayWeek.map((day, index) => {
            const isToday = day.toDateString() === today.toDateString();
            return (
              <S.DayHeader key={index} data-istoday={isToday}>
                {day.getDate()}
                ({day.toLocaleDateString('ko-KR', { weekday: 'short' })})
              </S.DayHeader>
            );
          })}
        </S.HospitalHeader>
        <S.CalendarBody>
          {events.length === 0 ? (
            <S.NoDate>일정 없음</S.NoDate>
          ) : (
            dayWeek.map((day, index) => {
              const dayEvents = events.filter(event => new Date(event.start).toDateString() === day.toDateString());
              return (
                <S.DayContainer key={index}>
                  {dayEvents.length === 0 ? (
                    <S.NoDate>일정 없음</S.NoDate>
                  ) : (
                    dayEvents.sort((a, b) => new Date(a.start) - new Date(b.start))
                      .map((event, idx) => {
                        const { top } = calculateEventPosition(event.start);
                        return (
                          <S.Event key={idx} style={{ top: `${top}%` }}>
                            <S.EventTime>{formatTime(new Date(event.start))}<br /></S.EventTime>
                            <S.EventTitle>{event.location}<br /></S.EventTitle>
                            <S.EventTitle><strong>{event.title}</strong></S.EventTitle>
                          </S.Event>
                        );
                      })
                  )}
                </S.DayContainer>
              );
            })
          )}
        </S.CalendarBody>
        {showForm && (
          <>
            <S.backWrapping onClick={() => setShowForm(false)} />
            <S.NewEventForm onSubmit={handleSubmit}>
              <S.FormContent>
                <S.FormTitle>병원진료 예약</S.FormTitle>
                <S.FormText>제목:</S.FormText>
                <S.contentContainer>
                  <S.EventInputStyle
                    type="text"
                    name="title"
                    value={newEvent.title}
                    onChange={handleInputChange}
                    required
                  />
                </S.contentContainer>
                <S.FormText>장소:</S.FormText>
                <S.contentContainer>
                  <S.EventInputStyle
                    type="text"
                    name="location"
                    value={newEvent.location}
                    onChange={handleInputChange}
                    required
                  />
                </S.contentContainer>
                <S.FormText>시작 시간:</S.FormText>
                <S.contentContainer>
                  <DatePicker
                    selected={newEvent.start}
                    onChange={handleDateChange}
                    showTimeSelect
                    dateFormat="yyyy/MM/dd aa hh:mm"
                    minDate={today}
                    timeFormat="aa hh:mm"
                    timeIntervals={15}
                    customInput={<S.DateSelectInput />}
                  />
                </S.contentContainer>
                <S.row>
                  <S.HospitalCloseButton onClick={() => setShowForm(false)}>닫기</S.HospitalCloseButton>
                  <S.HospitalAddButton onClick={handleSubmit}>추가</S.HospitalAddButton>
                </S.row>
              </S.FormContent>
            </S.NewEventForm>
          </>
        )}
      </S.HospitalContainer>
    </S.bigBox>
  );
};

export default Hospital;
