import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { PiPencilSimple, PiCalendarBlank } from "react-icons/pi";
import { TbPencilPlus } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";

import { API } from '../../api';

import * as S from "./Styled";

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [familyId, setFamilyId] = useState(null);
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

  const FetchUserId = async () => {
    try {
      const response = await API.get('/accounts/profile/');
      console.log("userId response", response.data);
      setUserId(response.data.user.id); // user 객체 내의 id 가져오기
    } catch (error) {
      console.log('fetch user id error:', error);
    }
  };

  const FetchDateData = async () => {
    try {
      const response = await API.get('/cal/events/list/');
      console.log("event List", response.data);
      setEvents(response.data);
    } catch (error) {
      console.log('fetch events error:', error);
    }
  };

  const FetchPartiData = async () => {
    try {
      const response = await API.get('/users/family/');
      console.log("family response", response.data);
      const participants = response.data.flatMap(family => {
        const familyMemberIds = family.profiles.map(profile => profile.user);
        if (familyMemberIds.includes(userId)) {
          setFamilyId(family.family_id);
          console.log("familyId", family.family_id);
        }
        return family.profiles.map(profile => ({
          nickname: profile.nickname,
          user_id: profile.user
        }));
      });
      setAvailableParticipants(participants);
    } catch (error) {
      console.log('fetch participants error:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await FetchUserId();
      if (userId) {
        await FetchPartiData();
        await FetchDateData();
      }
    };
    fetchData();
  }, [userId]);

  const PostDateData = async () => {
    try {
      const eventData = {
        title: newEventTitle,
        start: newEventStartDate.toISOString(),
        end: newEventEndDate.toISOString(),
        participants: selectedParticipants.map(p => p.user_id),
      };

      console.log("posting eventData", eventData);
      
      const response = await API.post('/cal/events/', eventData);

      console.log("post response", response.data);
      FetchDateData();
    } catch (error) {
      console.error('Post error', error);
      alert('Post 실패');
    }
  };

  const handleEvent = () => {
    PostDateData();
    setShowForm(false);
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

        return isInDateRange;
      })
      .map((event, index) => {
        const isStart = date.toDateString() === new Date(event.start).toDateString();
        const isEnd = date.toDateString() === new Date(event.end).toDateString();

        return (
          <S.EventTile
            key={index}
            $isStart={isStart}
            $isEnd={isEnd}
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

  const CloseAddForm = () => {
    setShowForm(false);
  };

  const CloseEmojiForm = () => {
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

      return selectedDateOnly >= eventStartDate && selectedDateOnly <= eventEndDate;
    });
    setSelectedEvent(eventsForSelectedDate);
    setShowDetails(true);
  };

  const CloseDetails = () => {
    setShowDetails(false);
  };

  const handleTodayClick = (date) => {
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
      if (tileDate.getDay() === 0) { // 일요일
        return isCurrentMonth ? 'current-month-sunday' : 'other-month-sunday';
      }
      if (tileDate.getDay() === 6) { // 토요일
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
                <S.CloseButton onClick={CloseEmojiForm}>X</S.CloseButton>
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
                    <S.dateCloseButton onClick={CloseAddForm}>닫기</S.dateCloseButton>
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
              <S.CloseButton2 onClick={CloseDetails}>X</S.CloseButton2>
              <S.AddEventButton onClick={() => setShowEmojiForm(!showEmojiForm)}>+</S.AddEventButton>
            </S.EventDetailsHeader>
            <S.DateStyle>{`${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일`}</S.DateStyle>
            <S.ScheduleStyle>
              {selectedEvent.length > 0 ? (
                selectedEvent.map((event, index) => (
                  <div key={index} style={{ backgroundColor: event.color }}>
                    <h3>{event.title}</h3>
                    <p>{event.start}</p>
                    <p>{event.end}</p>
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
