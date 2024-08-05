import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from "../../assets/Calendar.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import * as S from "./Styled";
import { API } from "../../api";

const Hospital = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', appointment_datetime: new Date(), location: '', patient: '' });
  const [showForm, setShowForm] = useState(false);
  const [availablePatient, setAvailablePatient] = useState([]);
  const [patientMap, setPatientMap] = useState({});

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await API.get('/health/appointments/');
        console.log("Fetched appointments:", response.data);
        setEvents(response.data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };
  
    const fetchPatient = async () => {
      try {
        const response = await API.get('/users/family');
        console.log("Fetched patient:", response.data);
        const patient = response.data.flatMap(family => 
          family.profiles.map(profile => ({
            nickname: profile.nickname,
            user_id: profile.user
          }))
        );
        const patientMap = patient.reduce((acc, cur) => {
          acc[cur.user_id] = cur.nickname;
          return acc;
        }, {});
        setAvailablePatient(patient);
        setPatientMap(patientMap);
      } catch (error) {
        console.error('Failed to fetch patients:', error);
      }
    };
  
    fetchAppointments();
    fetchPatient();
  }, []);
  
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
    setNewEvent({ ...newEvent, appointment_datetime: date });
  };

  const handlePatientChange = (e) => {
    console.log(e.target.value);
    const selectedUserId = parseInt(e.target.value);
    setNewEvent({ ...newEvent, patient: selectedUserId });
    console.log("Selected patient:", selectedUserId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { 
      ...newEvent, 
      appointment_datetime: new Date(newEvent.appointment_datetime).toISOString()
    };
    console.log("Data to be posted:", postData);
    try {
      const response = await API.post('/health/appointments/', postData);
      console.log("Post response:", response.data);
      setEvents([...events, response.data]);
      setNewEvent({ name: '', appointment_datetime: new Date(), location: '', patient: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Failed to add appointment:', error.response?.data || error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      console.log(`Attempting to delete event with ID: ${id}`);
      await API.delete(`/health/appointments/${id}/`);
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error('Failed to delete event');
    }
  };

  return (
    <S.bigBox>
      <S.Rowbetween>
        <S.HospitalTitle>병원진료 예약</S.HospitalTitle>
        <S.AddEventButton onClick={() => setShowForm(true)}>일정 추가하기+</S.AddEventButton>
      </S.Rowbetween>
      <S.HospitalContent>
        <S.IMG src={Calendar} alt="Calendar" />
        {today.getMonth() + 1}월
      </S.HospitalContent>
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
          {
            dayWeek.map((day, index) => {
              const dayEvents = events.filter(event => new Date(event.appointment_datetime).toDateString() === day.toDateString());
              return (
                <S.DayContainer key={index}>
                  {dayEvents.length === 0 ? (
                    <S.Event><S.NoDate>일정 없음</S.NoDate></S.Event>
                  ) : (
                    dayEvents.sort((a, b) => new Date(a.appointment_datetime) - new Date(b.appointment_datetime))
                      .map((event, idx) => {
                        const { top } = calculateEventPosition(event.appointment_datetime);
                        return (
                          <S.Event key={idx} style={{ top: `${top}%` }}>
                            <S.Rowbetween>
                              <S.EventTime>{formatTime(new Date(event.appointment_datetime))}<br /></S.EventTime>
                              <FaTimes onClick={() => deleteEvent(event.id)} style={{ cursor: 'pointer', width: '15px', height: '15px' }} />
                            </S.Rowbetween>
                            <S.EventTitle>장소: {event.location}<br /></S.EventTitle>
                            <S.EventTitle><strong>{event.name}</strong></S.EventTitle>
                            <S.EventTitle><strong>진료자: {patientMap[event.patient]}</strong></S.EventTitle>
                          </S.Event>
                        );
                      })
                  )}
                </S.DayContainer>
              );
            })
          }
        </S.CalendarBody>
        {showForm && (
          <>
            <S.backWrapping onClick={() => setShowForm(false)} />
            <S.NewEventForm>
              <S.FormContent>
                <S.FormTitle>병원진료 예약</S.FormTitle>
                <S.FormText>진료자</S.FormText>
                <S.contentContainer>
                  <IoPersonCircleOutline color="#2D539E" size={25} />
                  <S.EventSelectStyle
                    name="patient"
                    value={newEvent.patient}
                    onChange={handlePatientChange}
                  >
                    <option value="">참가자 선택</option>
                    {availablePatient.map((patient, index) => (
                      <option key={index} value={patient.user_id}>
                        {patient.nickname}
                      </option>
                    ))}
                  </S.EventSelectStyle>
                </S.contentContainer>
                <S.FormText>예약 일정</S.FormText>
                <S.contentContainer>
                  <DatePicker
                    selected={newEvent.appointment_datetime}
                    onChange={handleDateChange}
                    showTimeSelect
                    dateFormat="yyyy/MM/dd aa hh:mm"
                    minDate={today}
                    timeFormat="aa hh:mm"
                    timeIntervals={15}
                    customInput={<S.DateSelectInput />}
                  />
                </S.contentContainer>
                <S.FormText>병원 이름</S.FormText>
                <S.contentContainer>
                  <S.EventInputStyle
                    type="text"
                    name="location"
                    value={newEvent.location}
                    onChange={handleInputChange}
                    required
                  />
                </S.contentContainer>
                <S.FormText>아픈 곳</S.FormText>
                <S.contentContainer>
                  <S.EventInputStyle
                    type="text"
                    name="name"
                    value={newEvent.name}
                    onChange={handleInputChange}
                    required
                  />
                </S.contentContainer>
                <S.row>
                  <S.HospitalCloseButton onClick={() => setShowForm(false)}>취소하기</S.HospitalCloseButton>
                  <S.HospitalAddButton onClick={handleSubmit}>등록하기</S.HospitalAddButton>
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
