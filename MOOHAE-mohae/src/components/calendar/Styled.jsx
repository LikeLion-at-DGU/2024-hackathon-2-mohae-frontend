import styled, {keyframes,css} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
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
  width: 100%;
  align-items: center;

  @media (max-width: 359px) {
    width: 320px;
  }
`;

export const CalendarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 30px 40px;

  background-color: #FFF;

  border: 1px solid #FFF;
  border-radius: 20px;

  @media (max-width: 359px) {
    padding: 0.5rem 0.5rem;
  }
`;

export const Icon = styled.div`
  
`;

export const CalendarLine = styled.div`
  display: flex;
  position: relative;
  border: 1px solid #E8E8E8;
  top: 50px;
  left: -40px;
  width: calc(100% + 80px);

  @media (max-width: 359px) {
    top: 32px;
    left: -10px;
    width: calc(100% + 18px);
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 40px;
  top: 20px;
  gap: 0.5rem;

  @media (max-width: 359px) {
    right: 10px;
    top: 4px;
    gap: 0.375rem;
  }
`;

export const TodayButton = styled.button`
  background-color: #2D539E;
  color: #FFF;

  font-size: 1rem;
  font-weight: 700;
  font-family: "NanumSquareRound";
  
  border: none;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #1D3E7F;
  }

  @media (max-width: 359px) {
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
  }
`;

export const AddEventButton = styled.button`
  color:  #2D539E;
  border: none;
  cursor: pointer;
  font-size: 2.5rem;
  font-family: "NanumSquareRound";
  background-color: #FFF;
  

  &:hover {
    color: #1D3E7F
  }

  @media (max-width: 359px) {
    font-size: 1.5rem;
  }
  
`;

export const CalendarMonthYear = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: "NanumSquareRound";

  @media (max-width: 359px) {
    font-size: 0.5rem;
  }
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
    align-items: flex-start;

    @media (max-width: 359) {
      border: none;
    }
  }

  .react-calendar__viewContainer {
    margin-top: 20px;

    @media (max-width: 359px) {
      margin-top: 0.25rem;
    }
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

  .react-calendar__navigation__arrow {
    border: none;
    min-width: 1.25rem;
    font-size: 2rem;
    min-height: 1.5rem;
    color: #2D539E;
    background-color: inherit;

    &:hover {
      color: #1D3E7F;
      font-weight: 500;
    }

    @media (max-width: 359px) {
      font-size: 1rem;
    }
  }

  .react-calendar__navigation__label {
    border: none;
    padding: 4px 12px;
    border-radius: 5px;
    background-color: inherit;
    font-family: "NanumSquareRound";
    color: #2D539E;
    font-size: 1.5rem;
    font-weight: 700;

    &:hover {
      color: #1D3E7F;
      font-weight: 800;
    }

    @media (max-width: 359px) {
      font-size: 0.75rem;
    }
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
    font-size: 1rem;
    font-weight: bold;
    font-weight: 700;
    font-family: "NanumSquareRound";
    color: #2D539E;
    margin-bottom: 0.5rem;

    @media (max-width: 359px) {
      font-size: 0.5rem;
      margin-bottom: 0.25rem;
      font-weight: 600;
    }
  }
  
  .current-month-sunday {
    color: #DE0000 !important;
  }

  .current-month-satday {
    color: #4081FF !important;
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
    min-width: 100px;
    min-height: 100px;
    padding: 0.75em 0em;
    
    background: none;
    border: 1px solid #E8E8E8;

    @media (max-width: 359px) {
      min-height: 3.5rem;
      min-width: 30px;
      padding: 0.1em;
      font-size: 0.375rem;
    }
  }

  .react-calendar__tile abbr {
    font-family: "NanumSquareRound";
    font-weight: 700;
    font-style: normal;
  }

  .react-calendar__tile abbr{
    margin-left: 10px;

    @media (max-width: 359px) {
    margin-left: 0;
    }
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__tile--now {
    background: #F0F0F0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: #F0F0F0;
  }

`;

export const EventTile = styled.div`
  background-color: ${({ color }) => color || 'gray'};
  color: white;
  padding: 2px;
  height: 0.75rem;
  margin-left: ${(props) =>
    props.$isStart && props.$isEnd ? '0.125rem' :
    props.$isStart ? '0.125rem' :
    props.$isEnd ? '' : ''};
  margin-right: ${(props) =>
    props.$isStart && props.$isEnd ? '0.125rem' :
    props.$isStart ? '' :
    props.$isEnd ? '0.125rem' : ''};
  width: ${(props) =>
    props.$isStart && props.$isEnd ? 'calc(100% - 0.375rem)' :
    props.$isStart ? '100%' :
    props.$isEnd ? 'calc(100% - 0.375rem)' : '100%'};
  border-radius: ${(props) => 
    props.$isStart && props.$isEnd ? '10px' : 
    props.$isStart ? '10px 0 0 10px' : 
    props.$isEnd ? '0px 10px 10px 0px ' : '0'};
  position: relative;
  margin-bottom: 2px; // 타일 간의 간격 추가
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    display: block;
    font-family: "NanumSquareRound";
    font-size: 0.5rem;
  }

  @media (max-width: 359px) {
    margin-left: ${(props) =>
      props.$isStart && props.$isEnd ? '0.0625rem' :
      props.$isStart ? '0.0625rem' :
      props.$isEnd ? '' : ''};
    margin-right: ${(props) =>
      props.$isStart && props.isEnd ? '0.0625rem' :
      props.$isStart ? '' :
      props.$isEnd ? '0.0625rem' : ''};
    width: ${(props) =>
      props.$isStart && props.$isEnd ? 'calc(100% - 0.375rem)' :
      props.$isStart ? '100%' :
      props.$isEnd ? 'calc(100% - 0.375rem)' : '100%'};
    border-radius: ${(props) => 
      props.$isStart && props.$isEnd ? '10px' : 
      props.$isStart ? '10px 0 0 10px' : 
      props.$isEnd ? '0px 10px 10px 0px ' : '0'};

      
    height: 0.4rem;
    
    span {
      font-size: 0.375rem;
    }
  }
`;

export const EventDetailsHeader = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const NewEventForm = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 500px;
  max-width: 90%;
  z-index: 1000;

  animation: ${fadeIn} 0.3s ease-in-out;

  @media (max-width: 359px) {
    min-width: 300px;
  }
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
  
  @media (max-width: 359px) {
    padding: 0.25rem;
  }
`;

export const backWrapping = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

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
  font-size: 1.75rem;
  cursor: pointer;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 359px) {
    flex-direction: column;
    gap: 1rem;
  }
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
  position: fixed;

  top: 50%;
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
  font-family: "NanumSquareRound";
  padding: 0.344rem 0rem;

  @media (max-width: 359px) {
    font-size: 0.75rem;
    margin-left: 10px;
  }
`;

export const EventSelectStyle = styled.select`
  margin-left: 30px;
  display: flex;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-family: "NanumSquareRound";
  padding: 0.344rem 0rem;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const DateSelectInput = styled.input`
  border: none;
  text-align: center;
  justify-content: space-around;
  font-size: 1rem;
  font-family: "NanumSquareRound";
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
  background-color: ${(props) => props.$isActive ? '#4CAF50' : '#ccc'};
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const ToggleCircle = styled.div`
  position: absolute;
  top: 2px;
  left: ${(props) => props.$isActive ? '26px' : '2px'};
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


export const SelectedParticipant = styled.div`
  display: inline-block;
  margin-right: 8px;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1rem;
`;

export const RemoveParticipant = styled.div`
  display: inline-block;
  padding: 0.5rem;
  font-size: 1rem;
  color: #2d539e;
`;

// side detail

export const SideSchedules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 359px) {
    font-size: 0.5rem;
  }

  animation: ${({ showDetails }) => showDetails ? css`${slideOut} 0.7s forwards` : css`${slideIn} 0.7s forwards`};
`;

export const SideContainer = styled.div`
  display: flex;
  width: 280px;
  height: 100%;

  flex-direction: column;

  border-radius: 1.25rem;
  background-color: #FFF;
  box-shadow: 0px 4px 21.9px 0px rgba(0, 0, 0, 0.10);
`;

export const DateStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem 1rem;
  font-size: 1.5rem;
  font-family: "NanumSquareRound";
  font-weight: 800;
  color: #2d539e;
`;

export const ScheduleStyle = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: "NanumSquareRound";
  font-weight: 300;
  color: #000;
`;

export const FormTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  margin-bottom: 1rem;
`;