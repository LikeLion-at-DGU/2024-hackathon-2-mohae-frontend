import React, { useState } from "react";
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { PiPencilSimple , PiCalendarBlank } from "react-icons/pi";
import { TbPencilPlus } from "react-icons/tb";


import * as S from "./Styled";

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventStartDate, setNewEventStartDate] = useState(new Date());
  const [newEventEndDate, setNewEventEndDate] = useState(new Date());

  const [allDay, setAllDay] = useState(false);

  const [color, setColor] = useState('');
  const [availColor, setAvailColor] = useState([
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ]);

  const [emoji, setEmoji] = useState('');
  const [emojiText, setEmojiText] = useState('');
  const [availEmoji, setAvailEmoji] = useState([
    '😀', '😄', '🤣', '😅', '😍', '😡', '🤬'
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newEventCategory, setNewEventCategory] = useState('');

  const [categories, setCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showEmojiForm, setShowEmojiForm] = useState(false);
  const [dateEmojis, setDateEmojis] = useState({});

  const addEvent = () => {
    let startDate = new Date(newEventStartDate);
    let endDate = new Date(newEventEndDate);

    if (!allDay) {
      startDate.setHours(newEventStartDate.getHours(), newEventStartDate.getMinutes());
      endDate.setHours(newEventEndDate.getHours(), newEventEndDate.getMinutes());
    }

    if (endDate < startDate) {
      endDate = startDate;
    }

    // 시작날짜를 하루 안빼면 이상해지더라고요.. 나중에 고칠게요
    startDate.setDate(startDate.getDate() - 1);

    const eventColor = categories.find(cat => cat.name === newEventCategory)?.color || color;

    setEvents([...events, {
      start: startDate,
      end: endDate,
      title: newEventTitle,
      allDay,
      category: newEventCategory,
      color: eventColor,
    }]);

    if (!categories.some(category => category.name === newEventCategory)) {
      setCategories([...categories, { name: newEventCategory, color: eventColor }]);
    }

    setNewEventTitle('');
    setNewEventStartDate(new Date());
    setNewEventEndDate(new Date());
    setNewEventCategory('');
    setColor('');
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
      .filter(event => date >= event.start && date <= event.end)
      .map((event, index) => {
        const isStart = date.toDateString() === new Date(event.start.getTime() + 86400000).toDateString();
        const isEnd = date.toDateString() === new Date(event.end.getTime()).toDateString();

        return (
          <S.EventTile
            key={index}
            color={event.color}
            isStart={isStart}
            isEnd={isEnd}
          >
            <span>{isStart ? `${event.category} ${event.title}` : ''}</span>
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

  const handleCategoryChange = (e) => {
    const selectedCategory = categories.find(category => category.name === e.target.value);
    if (selectedCategory) {
      setNewEventCategory(selectedCategory.name);
      setColor(selectedCategory.color);
    } else {
      setNewEventCategory(e.target.value);
      setColor('');
    }
  };

  const CloseAddForm = () => {
    setShowForm(false);
  };

  const CloseEmojiForm = () => {
    setShowEmojiForm(false);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const event = events.filter(event => date >= event.start && date <= event.end);
    setSelectedEvent(event);
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

  return (
    <S.Main>
      <S.Body>
        <S.CalendarContainer>
          <S.CalendarLine />
          <S.CalendarHeader>
            <S.AddEventButton onClick={() => setShowForm(!showForm)}><TbPencilPlus /></S.AddEventButton>
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
              // 오늘 날짜로 가기 설정
              activeStartDate={activeStartDate === null ? undefined : activeStartDate}
              onActiveStartDateChange={({ activeStartDate }) =>
                setActiveStartDate(activeStartDate)
              }
              tileClassName={tileClassName}
            />
          </S.CustomCalendar>
        </S.CalendarContainer>
        {showDetails && selectedDate && (
          <S.EventDetails>
            <S.EventDetailsHeader>
              <S.CloseButton2 onClick={CloseDetails}>X</S.CloseButton2>
              <S.AddEventButton onClick={() => setShowEmojiForm(!showEmojiForm)}>+</S.AddEventButton>
            </S.EventDetailsHeader>
            <><h2>{`${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일`}</h2></>
            {selectedEvent.length > 0 ? (
              selectedEvent.map((event, index) => (
                <div key={index} style={{ backgroundColor: event.color }}>
                  {event.category ? `${event.category} : ` : ''} {event.title}
                  {event.start.getFullYear() === event.end.getFullYear() && event.start.getMonth() === event.end.getMonth() && event.start.getDate() + 1 === event.end.getDate() ? (
                    <p>{event.allDay ? "하루종일" : `${event.start.getHours()}:${event.start.getMinutes()} ~ ${event.end.getHours()}:${event.end.getMinutes()}`}</p>
                  ) : (
                    <p>{event.allDay ? `${event.start.getFullYear()}.${event.start.getMonth() + 1}.${event.start.getDate() + 1} ~ ${event.end.getFullYear()}.${event.end.getMonth() + 1}.${event.end.getDate()}` : `${event.start.getFullYear()}.${event.start.getMonth() + 1}.${event.start.getDate()} ${event.start.getHours()}:${event.start.getMinutes()} ~ ${event.end.getFullYear()}.${event.end.getMonth() + 1}.${event.end.getDate()} ${event.end.getHours()}:${event.end.getMinutes()}`}</p>
                  )}
                </div>
              ))
            ) : (
              <div>일정 없음</div>
            )}
            <div>
              {dateEmojis[selectedDate.toDateString()]?.length === 0 ? '이모지 없음' : dateEmojis[selectedDate.toDateString()]?.map((item, idx) => (
                <div key={idx}>
                  <span>{item.emoji}</span>
                  <span>{item.emojiText}</span>
                </div>
              ))}
            </div>
          </S.EventDetails>
        )}
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
            <S.backWrapping />
            <S.NewEventForm>
              <S.FormContent>
                <h2>새 일정 추가</h2>
                <S.contentContainer>
                  <PiPencilSimple color="#2D539E" size={25}/>
                  <S.EventInputStyle
                    type="text"
                    value={newEventTitle}
                    onChange={(e) => setNewEventTitle(e.target.value)}
                    placeholder="제목을 입력하세요."
                  />
                </S.contentContainer>
                <S.contentContainer>
                  <S.ToggleLabel>하루종일</S.ToggleLabel>
                  <S.ToggleContainer isActive={allDay} onClick={toggleAllDay}>
                    <S.ToggleCircle isActive={allDay} />
                  </S.ToggleContainer>
                </S.contentContainer>
                <S.EventContainer>
                  {allDay && (
                    <S.contentContainer>
                      <DatePicker
                        showIcon
                        icon={<PiCalendarBlank color="#2D539E"/>}
                        selected={newEventStartDate}
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
                        icon={<PiCalendarBlank color="#2D539E"/>}
                        selected={newEventStartDate}
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
                        icon={<PiCalendarBlank color="#2D539E"/>}
                        selected={newEventEndDate}
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
                        icon={<PiCalendarBlank color="#2D539E"/>}
                        selected={newEventEndDate}
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
                
                {/* <div>
                  <label>누가?:</label>
                  <select value={newEventCategory} onChange={handleCategoryChange}>
                    <option value="">새로운 모해?</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                  {!categories.some(category => category.name === newEventCategory) && (
                    <>
                      <input
                        type="text"
                        value={newEventCategory}
                        onChange={(e) => setNewEventCategory(e.target.value)}
                        placeholder="누가 모해?"
                      />
                    </>
                  )}
                  {!categories.some(category => category.name === newEventCategory) && (
                    <>
                      <select 
                        value={color} 
                        onChange={(e) => setColor(e.target.value)}>
                        <option value="">색상 선택</option>
                        {availColor.filter(c => !events.some(event => event.color === c)).map((color, index) => (
                          <option key={index} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                    </>
                  )}  
                </div> */}
                <S.row>
                  <S.dateCloseButton onClick={CloseAddForm}>닫기</S.dateCloseButton>
                  <S.AddButton onClick={addEvent}>추가</S.AddButton>
                </S.row>
              </S.FormContent>
            </S.NewEventForm>
          </>
        )}
      </S.Body>
    </S.Main>
  );
}

export default CustomCalendar;


