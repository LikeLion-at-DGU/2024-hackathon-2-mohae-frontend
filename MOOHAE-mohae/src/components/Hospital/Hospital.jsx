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
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
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
    <>
      <S.HospitalTitle>병원진료 예약</S.HospitalTitle>
      <S.HospitalContent>
        <img src={Calendar} alt="Calendar" style={{ width: 50, height: 50 }} />
        {today.getMonth() + 1}월
      </S.HospitalContent>
      <S.HospitalContainer>
        <S.AddEventButton onClick={() => setShowForm(true)}>일정 추가</S.AddEventButton>
        <S.HospitalHeader>
          {daysOfWeek.map((day, index) => {
            const isToday = day.toDateString() === today.toDateString();
            return (
              <S.DayHeader key={index} isToday={isToday}>
                {day.getMonth() + 1}/{day.getDate()}
                {day.toLocaleDateString('ko-KR', { weekday: 'short' })}
              </S.DayHeader>
            );
          })}
        </S.HospitalHeader>
        <S.CalendarBody>
          {events.length === 0 ? (
            <S.NoDate>일정 없음</S.NoDate>
          ) : (
            daysOfWeek.map((day, index) => {
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
                            <strong>{event.title}</strong><br />
                            {event.location}<br />
                            {formatTime(new Date(event.start))}
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
            <S.FormOverlay onClick={() => setShowForm(false)} />
            <S.EventForm onSubmit={handleSubmit}>
              <S.FormField>
                <S.FormLabel>제목:</S.FormLabel>
                <S.FormInput
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  required
                />
              </S.FormField>
              <S.FormField>
                <S.FormLabel>장소:</S.FormLabel>
                <S.FormInput
                  type="text"
                  name="location"
                  value={newEvent.location}
                  onChange={handleInputChange}
                  required
                />
              </S.FormField>
              <S.FormField>
                <S.FormLabel>시작 시간:</S.FormLabel>
                <DatePicker
                  selected={newEvent.start}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat="yyyy/MM/dd aa hh:mm"
                  minDate={today}
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  customInput={<S.DateSelectInput />}
                />
              </S.FormField>
              <S.FormButton type="submit">추가</S.FormButton>
            </S.EventForm>
          </>
        )}
      </S.HospitalContainer>
    </>
  );
};

export default Hospital;
