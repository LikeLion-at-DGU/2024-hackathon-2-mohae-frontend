import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { PiPencilSimple, PiCalendarBlank } from "react-icons/pi";
import { TbPencilPlus } from "react-icons/tb";
import { IoPersonCircleOutline, IoTrashOutline } from "react-icons/io5";

import { API } from '../../api';

import * as S from "./Styled";

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [userId, setUserId] = useState(null);

  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventStartDate, setNewEventStartDate] = useState(new Date());
  const [newEventEndDate, setNewEventEndDate] = useState(new Date());

  const [allDay, setAllDay] = useState(false);

  const [emoji, setEmoji] = useState('');
  const [emojiText, setEmojiText] = useState('');
  const [availEmoji, setAvailEmoji] = useState([
    '😀', '😄', '🤣', '😅', '😍', '😡', '🤬'
  ]);

  const [showForm, setShowForm] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showEmojiForm, setShowEmojiForm] = useState(false);
  const [dateEmojis, setDateEmojis] = useState({});

  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [availableParticipants, setAvailableParticipants] = useState([]);

  const fetchUserId = async () => {
    try {
      const response = await API.get('/accounts/profile/');
      setUserId(response.data.user.id);
    } catch (error) {
      console.log('fetch user id error:', error);
    }
  };

  const fetchDateData = async () => {
    try {
      const response = await API.get('/cal/events/list/');
      setEvents(response.data);
    } catch (error) {
      console.log('fetch events error:', error);
    }
  };

  const fetchPartiData = async () => {
    try {
      const response = await API.get('/users/family');
      const participants = response.data.flatMap(family => 
        family.profiles.map(profile => ({
          nickname: profile.nickname,
          user_id: profile.user
        }))
      );
      console.log(participants);
      setAvailableParticipants(participants);
    } catch (error) {
      console.log('fetch participants error:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchUserId();
      await fetchPartiData();
      await fetchDateData();
    };
    fetchData();
  }, []);

  const postDateData = async () => {
    try {
      const eventData = {
        title: newEventTitle,
        start: newEventStartDate.toISOString(),
        end: newEventEndDate.toISOString(),
        participants: selectedParticipants.map(p => p.user_id),
      };
      
      const response = await API.post('/cal/events/', eventData);
      fetchDateData();
    } catch (error) {
      console.error('Post error', error);
      alert('Post 실패');
    }
  };

  const handleEvent = () => {
    postDateData();
    setShowForm(false);
  };

  const deleteEvent = async (eventId) => {
    try {
      await API.delete(`/cal/events/${eventId}/delete/`);
      setEvents(events.filter(event => event.event_id !== eventId));
      setShowDetails(false);
    } catch (error) {
      console.error('Failed to delete event:', error);
    }
  };

  const addEmojiToDate = () => {
    const dateString = selectedDate.toDateString();
    setDateEmojis({
      ...dateEmojis,
      [dateString]: [...(dateEmojis[dateString] || []), { emoji, emojiText }],
    });
    setEmoji('');
    setEmojiText('');
    setShowEmojiForm(false);
  };

  const renderEvents = (date) => {
    return events
      .filter(event => {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);

        const eventStartDate = new Date(eventStart.getFullYear(), eventStart.getMonth(), eventStart.getDate());
        const eventEndDate = new Date(eventEnd.getFullYear(), eventEnd.getMonth(), eventEnd.getDate());
        const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        
        const isInDateRange = currentDate >= eventStartDate && currentDate <= eventEndDate;
        const hasValidParticipants = event.participants.every(pid => 
          availableParticipants.some(p => p.user_id === pid)
        );

        return isInDateRange && hasValidParticipants;
      })
      .map((event, index) => {
        const isStart = date.toDateString() === new Date(event.start).toDateString();
        const isEnd = date.toDateString() === new Date(event.end).toDateString();
        const color = getEventColor(event.event_id);

        return (
          <S.EventTile
            key={index}
            $isStart={isStart}
            $isEnd={isEnd}
            color={color}
          >
            <span>{isStart ? `${event.title}` : ''}</span>
          </S.EventTile>
        );
      });
  };

  const renderEmojis = (date) => {
    const dateString = date.toDateString();
    const emojisForDate = dateEmojis[dateString] || [];
    return emojisForDate.map((item, idx) => (
      <div key={idx}>
        <span>{item.emoji}</span>
      </div>
    ));
  };

  const closeAddForm = () => {
    setShowForm(false);
  };

  const closeEmojiForm = () => {
    setShowEmojiForm(false);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const eventsForSelectedDate = events.filter(event => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);

      const eventStartDate = new Date(eventStart.getFullYear(), eventStart.getMonth(), eventStart.getDate());
      const eventEndDate = new Date(eventEnd.getFullYear(), eventEnd.getMonth(), eventEnd.getDate());
      const selectedDateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const hasValidParticipants = event.participants.every(pid => 
        availableParticipants.some(p => p.user_id === pid)
      );

      return selectedDateOnly >= eventStartDate && selectedDateOnly <= eventEndDate && hasValidParticipants;
    });
    setSelectedEvent(eventsForSelectedDate);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  const handleTodayClick = () => {
    const today = new Date();
    setActiveStartDate(today);
    setDate(today);

    setShowDetails(false);
    setShowEmojiForm(false);
  };

  const toggleAllDay = () => {
    setAllDay(!allDay);
  };

  const tileClassName = ({ date: tileDate, view }) => {
    if (view === 'month') {
      const isCurrentMonth = tileDate.getMonth() === activeStartDate.getMonth() && tileDate.getFullYear() === activeStartDate.getFullYear();
      if (tileDate.getDay() === 0) {
        return isCurrentMonth ? 'current-month-sunday' : 'other-month-sunday';
      }
      if (tileDate.getDay() === 6) {
        return isCurrentMonth ? 'current-month-satday' : 'other-month-satday';
      }
    }
    return null;
  };

  const handleParticipantChange = (e) => {
    const selectedUserId = parseInt(e.target.value);
    const selectedParticipant = availableParticipants.find(participant => participant.user_id === selectedUserId);
    if (selectedParticipant && !selectedParticipants.includes(selectedParticipant)) {
      setSelectedParticipants([...selectedParticipants, selectedParticipant]);
    }
  };

  const removeParticipant = (participant) => {
    setSelectedParticipants(selectedParticipants.filter(p => p.user_id !== participant.user_id));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleString('en', options);
  };

  const generateRandomColor = (eventId) => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getEventColor = (eventId) => {
    if (!window.eventColors) {
      window.eventColors = {};
    }
    if (!window.eventColors[eventId]) {
      window.eventColors[eventId] = generateRandomColor();
    }
    return window.eventColors[eventId];
  };

  return (
    <>
      <S.Main>
        <S.Body>
          <S.CalendarContainer>
            <S.CalendarLine />
            <S.CalendarHeader>
              <S.AddEventButton onClick={() => setShowForm(!showForm)}><S.Icon><TbPencilPlus /></S.Icon></S.AddEventButton>
              <S.TodayButton onClick={handleTodayClick}>Today</S.TodayButton>
            </S.CalendarHeader>
            <S.CustomCalendar>
              <Calendar
                value={date}
                onChange={handleDateClick}
                tileContent={({ date }) => (
                  <>
                    {renderEvents(date)}
                    {renderEmojis(date)}
                  </>
                )}
                formatShortWeekday={(locale, date) => date.toLocaleDateString('en', { weekday: 'short' })}
                formatMonthYear={(locale, date) => `${date.getMonth() + 1}월`}
                calendarType="gregory"
                prevLabel="<"
                nextLabel=">"
                prev2Label=""
                next2Label=""
                minDetail="year"
                formatDay={(locale, date) => date.getDate().toString()}
                activeStartDate={activeStartDate === null ? undefined : activeStartDate}
                onActiveStartDateChange={({ activeStartDate }) =>
                  setActiveStartDate(activeStartDate)
                }
                tileClassName={tileClassName}
              />
            </S.CustomCalendar>
          </S.CalendarContainer>
          {showEmojiForm && (
            <>
              <S.backWrapping />
              <S.AddEmojiForm>
                <S.CloseButton onClick={closeEmojiForm}>X</S.CloseButton>
                <S.FormContent>
                  <h2>오늘모했어?</h2>
                  <S.EventContainer>
                    <select value={emoji} onChange={(e) => setEmoji(e.target.value)}>
                      <option value="">이모지 선택</option>
                      {availEmoji.map((emoji, index) => (
                        <option key={index} value={emoji}>
                          {emoji}
                        </option>
                      ))}
                    </select>
                    <textarea
                      value={emojiText}
                      onChange={(e) => setEmojiText(e.target.value)}
                      placeholder="오늘의 기분"
                    />
                    <S.AddButton onClick={addEmojiToDate}>추가</S.AddButton>
                  </S.EventContainer>
                </S.FormContent>
              </S.AddEmojiForm>
            </>
          )}
          {showForm && (
            <>
              <S.backWrapping onClick={() => setShowForm(false)} />
              <S.NewEventForm>
                <S.FormContent>
                  <S.FormTitle>새 일정 추가</S.FormTitle>
                  <S.contentContainer>
                    <PiPencilSimple color="#2D539E" size={25} />
                    <S.EventInputStyle
                      type="text"
                      value={newEventTitle}
                      onChange={(e) => setNewEventTitle(e.target.value)}
                      placeholder="제목을 입력하세요."
                    />
                  </S.contentContainer>
                  <S.contentContainer>
                    <S.ToggleLabel>하루종일</S.ToggleLabel>
                    <S.ToggleContainer $isActive={allDay} onClick={toggleAllDay}>
                      <S.ToggleCircle $isActive={allDay} />
                    </S.ToggleContainer>
                  </S.contentContainer>
                  <S.EventContainer>
                    {allDay && (
                      <S.contentContainer>
                        <DatePicker
                          showIcon
                          icon={<PiCalendarBlank color="#2D539E" style={{ position: 'absolute', top: '-2px' }} />}
                          selected={newEventStartDate}
                          value={newEventStartDate}
                          onChange={(date) => setNewEventStartDate(date)}
                          dateFormat="yyyy/MM/dd"
                          customInput={<S.DateSelectInput />}
                        />
                      </S.contentContainer>
                    )}
                    {!allDay && (
                      <S.contentContainer>
                        <DatePicker
                          showIcon
                          icon={<PiCalendarBlank color="#2D539E" style={{ position: 'absolute', top: '-2px' }} />}
                          selected={newEventStartDate}
                          value={newEventStartDate}
                          onChange={(date) => setNewEventStartDate(date)}
                          showTimeSelect
                          timeFormat="aa hh:mm"
                          timeIntervals={15}
                          dateFormat="yyyy/MM/dd aa h:mm"
                          timeCaption="time"
                          customInput={<S.DateSelectInput />}
                        />
                      </S.contentContainer>
                    )}

                    {allDay && (
                      <S.contentContainer>
                        <DatePicker
                          showIcon
                          icon={<PiCalendarBlank color="#2D539E" style={{ position: 'absolute', top: '-2px' }} />}
                          selected={newEventEndDate}
                          value={newEventEndDate}
                          onChange={(date) => setNewEventEndDate(date)}
                          dateFormat="yyyy/MM/dd"
                          customInput={<S.DateSelectInput />}
                        />
                      </S.contentContainer>
                    )}
                    {!allDay && (
                      <S.contentContainer>
                        <DatePicker
                          showIcon
                          icon={<PiCalendarBlank color="#2D539E" style={{ position: 'absolute', top: '-2px' }} />}
                          selected={newEventEndDate}
                          value={newEventEndDate}
                          onChange={(date) => setNewEventEndDate(date)}
                          showTimeSelect
                          timeFormat="aa hh:mm"
                          timeIntervals={15}
                          dateFormat="yyyy/MM/dd aa h:mm"
                          timeCaption="time"
                          customInput={<S.DateSelectInput />}
                        />
                      </S.contentContainer>
                    )}
                  </S.EventContainer>
                  <S.contentContainer>
                    <IoPersonCircleOutline color="#2D539E" size={25} />
                    <S.EventSelectStyle
                      value=""
                      onChange={handleParticipantChange}
                    >
                      <option value="">참가자 선택</option>
                      {availableParticipants.map((participant, index) => (
                        <option key={index} value={participant.user_id}>
                          {participant.nickname}
                        </option>
                      ))}
                    </S.EventSelectStyle>
                  </S.contentContainer>
                  <div>
                    {selectedParticipants.map((participant, index) => (
                      <S.SelectedParticipant key={index}>
                        {participant.nickname}
                        <S.RemoveParticipant onClick={() => removeParticipant(participant)}>X</S.RemoveParticipant>
                      </S.SelectedParticipant>
                    ))}
                  </div>
                  <S.row>
                    <S.dateCloseButton onClick={closeAddForm}>닫기</S.dateCloseButton>
                    <S.AddButton onClick={handleEvent}>추가</S.AddButton>
                  </S.row>
                </S.FormContent>
              </S.NewEventForm>
            </>
          )}
        </S.Body>
      </S.Main>
      {showDetails && selectedDate && (
        <S.SideSchedules>
          <S.SideContainer>
            <S.EventDetailsHeader>
              <S.CloseButton2 onClick={closeDetails}>X</S.CloseButton2>
              <S.AddEventButton onClick={() => setShowEmojiForm(!showEmojiForm)}>+</S.AddEventButton>
            </S.EventDetailsHeader>
            <S.DateStyle>{`${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일`}</S.DateStyle>
            <S.ScheduleStyle>
              {selectedEvent.length > 0 ? (
                selectedEvent.map((event, index) => (
                  <div key={index} style={{ backgroundColor: 'inherit' }}>
                    <S.Row>
                      <S.EventTitle>{event.title}</S.EventTitle>
                      <IoTrashOutline onClick={() => deleteEvent(event.event_id)} style={{ cursor: 'pointer' }} />
                    </S.Row>
                    <S.EventParti>
                      참가자: {event.participants
                        .map(pid => availableParticipants.find(p => p.user_id === pid)?.nickname)
                        .filter(nickname => nickname !== undefined)
                        .join(', ')
                      }
                    </S.EventParti>
                    <S.EventTime>{formatDate(event.start)} ~ {formatDate(event.end)}</S.EventTime>
                  </div>
                ))
              ) : (
                <div>일정 없음</div>
              )}
            </S.ScheduleStyle>
            <S.ScheduleStyle>
              {dateEmojis[selectedDate.toDateString()]?.length === 0 ? '이모지 없음' : dateEmojis[selectedDate.toDateString()]?.map((item, idx) => (
                <div key={idx}>
                  <span>{item.emoji}</span>
                  <span>{item.emojiText}</span>
                </div>
              ))}
            </S.ScheduleStyle>
          </S.SideContainer>
        </S.SideSchedules>
      )}
    </>
  );
}

export default CustomCalendar;
