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
  border-bottom: 1px solid #ccc;
  background-color: #FFF;
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
  width: 240px;
  gap: 0.5rem;
  padding: 20px 0px 20px 0px;
  align-items: center;
  justify-content: center;

  border-radius: 1rem 1rem 0rem 0rem;
  background-color: #fff;
`;

export const CalendarBody = styled.div`
  display: flex;
  width: 100%;
`;

export const DayContainer = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  min-height: 150px;
  position: relative;
`;

export const DayHeader = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;

  margin-bottom: 0.5rem;

  background-color: ${props => props.isToday ? '#2d539e' : '#fff'};
  color: ${props => props.isToday ? '#fff' : '#000'};
`;

export const Event = styled.div`
  background-color: ${props => props.color || '#add8e6'};
  margin: 5px;
  padding: 5px;
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
  border: none;
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
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
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