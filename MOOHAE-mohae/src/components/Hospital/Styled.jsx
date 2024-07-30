import styled, {keyframes} from 'styled-components';

export const HospitalContainer = styled.div`
  display: flex;
  width: 1140px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const HospitalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: inherit;
`;

export const HospitalTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HospitalContent = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  width: 120px;
  gap: 0.5rem;
  padding: 0.25rem 0rem;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  background-color: #fff;

  color: #2D538E;
  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
`;

export const CalendarBody = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  overflow-y: scroll;
`;

export const DayContainer = styled.div`
  flex: 1;
  min-height: 150px;
  position: relative;
`;

export const DayHeader = styled.div`
  width: 80px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: 'NanumSquareRound';
  font-weight: 700;
  font-size: 1.25rem;
  padding: 0.5rem 0rem;
  
  border-radius: 0.625rem;

  margin-bottom: 0.5rem;

  background-color: ${props => props.isToday ? '#2d539e' : 'inherit'};
  color: ${props => props.isToday ? '#fff' : '#000'};
`;

export const Event = styled.div`
  padding: 0.75rem;
  background-color: #FFF;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  min-height: 150px;

  margin: 1rem;
  border-radius: 4px;
  top: ${props => props.top}%;
  height: ${props => props.height}%;
  left: 5px;
  right: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const AddEventButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  top: -4rem;
  right: 0;
  position: absolute;
  background-color: #2d539e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 1000;
`;

export const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const DateSelectInput = styled.input`
  border: 1px solid #000;
  text-align: center;
  justify-content: space-around;
  font-size: 1rem;
  font-family: "NanumSquareRound";
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #2d539e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2d539e;
  }
`;

export const NoDate = styled.div`
  display: flex;
  margin-top: 1rem;

  justify-content: center;

  color: #9F9F9F;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const EventTime = styled.div`
  color: #2D539E;

  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const EventTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FormInput = styled.input`
  border: 1px solid #000;
  text-align: center;
  justify-content: space-around;
  font-size: 1rem;
  font-family: "NanumSquareRound";
`;
