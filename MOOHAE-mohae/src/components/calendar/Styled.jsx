import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalendarHeader = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 0.5rem;
`;

export const TodayButton = styled.button`
  background-color: #2D539E;
  color: #FFF;

  font-size: 1rem;
  font-weight: 700;

  border: none;
  padding: 4px 12px;
  cursor: pointer;
  border-radius: 5px;
`;

export const AddEventButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #218838;
  }
`;

export const CalendarMonthYear = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const CustomCalendar = styled.div`
  .react-calendar {
    display: flex;
    width: 100%;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    margin: 0;
    border: none;
    outline: none;
    flex-direction: column;
    align-items: flex-end;
  }

  //네비게이션 버튼들
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation {
    margin-bottom: 1em;
    display: flex;
    
  }

  .react-calendar__navigation button {
    min-width: 7px;
    min-height: 14px;
  }

  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__navigation__arrow {
    border: none;
    min-width: 1.25rem;
    font-size: 1.5rem;
    min-height: 1.5rem;
    color: #2D539E;
    background-color: inherit;
    font-size: 1.5rem;
  }

  .react-calendar__navigation__label {
    border: 1px solid #2D539E;
    padding: 4px 12px;
    border-radius: 5px;
    background-color: #2D539E;
    color: #FFF;
    font-size: 1rem;
  }

  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none;
  }

  // 월화수목금토일 설정
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
    color: #2D539E;
    margin-bottom: 0.5rem;
  }
  
  .current-month-sunday {
    color: red !important;
  }

  .other-month-sunday {
    color: #757575 !important;
  }

  .react-calendar__month-view__days__day {
    color: #2D539E;
  }

  //전월 후월 설정
  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__decade-view__years__year--neighboringDecade,
  .react-calendar__century-view__decades__decade--neighboringCentury {
    color: #757575;
  }

  //타일 설정
  .react-calendar__tile {
    display: flex;
    flex-direction: column;

    position: relative;

    max-width: 100%;
    min-height: 100px;
    padding: 0.75em 0em;
    background: none;
    border: 1px solid #E8E8E8;
  }

  .react-calendar__tile abbr{
    margin-left: 10px;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__tile--now {
    background: lightgray;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: lightgray;
  }

`;

export const EventTile = styled.div`
  background-color: ${({ color }) => color || 'gray'};
  color: white;
  padding: 2px;
  height: 0.75rem;
  margin-left: ${({ isStart, isEnd }) =>
    isStart && isEnd ? '0.25rem' :
    isStart ? '0.25rem' :
    isEnd ? '' : ''};
  margin-right: ${({ isStart, isEnd }) =>
    isStart && isEnd ? '0.25rem' :
    isStart ? '' :
    isEnd ? '0.25rem' : ''};
  width: ${({ isStart, isEnd }) =>
    isStart && isEnd ? 'calc(100% - 0.5rem)' :
    isStart ? '100%' :
    isEnd ? 'calc(100% - 0.25rem)' : '100%'};
  border-radius: ${({ isStart, isEnd }) => 
    isStart && isEnd ? '10px' : 
    isStart ? '10px 0 0 10px' : 
    isEnd ? '0px 10px 10px 0px ' : '0'};
  position: relative;
  margin-bottom: 2px; // 타일 간의 간격 추가
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    display: block;
    font-size: 0.5rem;
  }
`;

export const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 500px;
  height: 100%;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;

  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const EventDetailsHeader = styled.div`
  display: flex;
`;

export const NewEventForm = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
  max-width: 90%;
  z-index: 1000;

  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const contentContainer = styled.div`
  display: flex;
  text-align: center;
  padding: 0.5rem;

  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  border: 2px solid #EDEDED;
  border-radius: 10px;
`;

export const backWrapping = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  z-index: 100;
  background: rgba(159, 159, 159, 0.50);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const CloseButton2 = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 1rem;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeSelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TimeSelect = styled.select`
  margin: 0 5px;
`;

export const dateCloseButton = styled.button`
  background-color: #FFF;
  color: #2D539E;
  border: 1px solid  ;
  padding: 5px 10px;

  border-radius: 5px;
  width: 45%;
  font-size: 1rem;
`;

export const AddButton = styled.button`
  background-color: #2D539E;
  color: #FFF;
  border: none;
  padding: 5px 10px;

  border: 1px solid #2D539E;

  border-radius: 5px;
  width: 45%;
  font-size: 1rem;
`;

export const AddEmojiForm = styled.div`
  position: absolute;

  top: 25%;
  left: 50%;

  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-width: 90%;
  z-index: 100;

  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const EventInputStyle = styled.input`
  margin-left: 30px;
  display: flex;
  width: 100%;
  border: none;
  font-size: 1rem;
  padding: 0.344rem 0rem;
`;

export const DateSelectInput = styled.input`
  border: none;
  text-align: center;
  justify-content: space-around;
  font-size: 1rem;
`;

export const row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToggleContainer = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  background-color: ${({ isActive }) => (isActive ? '#4CAF50' : '#ccc')};
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const ToggleCircle = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ isActive }) => (isActive ? '26px' : '2px')};
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: white;
  transition: left 0.3s;
`;

export const ToggleLabel = styled.label`
  margin-left: 10px;
  font-size: 1rem;
  color: #2D539E;
  cursor: pointer;
`;
