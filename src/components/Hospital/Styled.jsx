import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const bigBox = styled.div`
  display: flex;
  width: 1140px;
  flex-direction: column;
  position: relative;

  @media (max-width: 359px) {
    width: 320px;
    padding: 0 10px;
  }
`;

export const HospitalContainer = styled.div`
  display: flex;
  width: 1140px;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 359px) {
    width: 320px;
    overflow-x: scroll;
  }
`;

export const HospitalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: inherit;

  @media (max-width: 359px) {
    justify-content: space-between;
    translate: 200px;
    width: 700px;
  }
`;

export const HospitalTitle = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 1rem;
  }
`;

export const IMG = styled.img`
  width: 35px;
  height: 35px;

  @media (max-width: 359px) {
    width: 20px;
    height: 20px;
  }
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
  font-weight: 700;

  @media (max-width: 359px) {
    margin-top: 0.5rem;
    width: 70px;
    gap: 0.375rem;
    font-size: 0.875rem;
  }
`;

export const CalendarBody = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  gap: 1rem;
  overflow-y: scroll;

  @media (max-width: 359px) {
    height: 150px;
    overflow-y: unset;
  }
`;

export const DayContainer = styled.div`
  flex: 1;
  min-height: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 359px) {
    min-height: 100px; 
    gap: 0.25rem;
    width: 90px;
  }
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

  @media (max-width: 359px) {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    padding: 0.25rem 0;
  }
`;

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: #FFF;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  min-height: 150px;
  min-width: 120px;
  margin: 1rem auto;
  top: ${props => props.top}%;
  height: ${props => props.height}%;
  left: 5px;
  right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 359px) {
    min-height: 100px;
    min-width: 70px;
    margin: 0.5rem;
  }
`;

export const AddEventButton = styled.div`
  display: flex;
  color: #9f9f9f;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;

  @media (max-width: 359px) {
    font-size: 1rem;
  }
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
    min-width: 280px;
    padding: 0 10px;
  }
`;

export const backWrapping = styled.div`
  width: 130%;
  height: 100%;
  position: fixed;
  top: 0;
  left: -15%;
  z-index: 100;
  background: rgba(159, 159, 159, 0.50);

  @media (max-width: 359px) {
    width: 106%;
    position: fixed;
    top: 0;
    left: -3%;
  }
`;

export const DateSelectInput = styled.input`
  text-align: center;
  justify-content: space-around;
  font-size: 1rem;
  font-family: "NanumSquareRound";
  width: 436px;
  border: none;
  outline: none;

  @media (max-width: 359px) {
    width: 280px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;

  @media (max-width: 359px) {
    padding: 1rem;
  }
`;

export const FormText = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-weight: 700;

  @media (max-width: 359px) {
    font-size: 1rem;
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #2d539e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1d3e7f;
  }

  @media (max-width: 359px) {
    padding: 5px 10px;
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
  font-weight: 700;

  @media (max-width: 359px) {
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }
`;

export const EventTime = styled.div`
  color: #2D539E;
  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-weight: 700;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
`;

export const EventTitle = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-weight: 700;
  text-overflow: ellipsis;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
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
    margin-left: 0;
    font-size: 0.875rem;
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

export const row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 359px) {
    gap: 0.5rem;
  }
`;

export const HospitalCloseButton = styled.button`
  background-color: #FFF;
  color: #2D539E;
  border: 1px solid;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 45%;
  font-size: 1rem;

  @media (max-width: 359px) {
    padding: 5px;
    font-size: 0.75rem;
  }
`;

export const HospitalAddButton = styled.button`
  background-color: #2D539E;
  color: #FFF;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #2D539E;
  border-radius: 5px;
  width: 45%;
  font-size: 1rem;

  @media (max-width: 359px) {
    padding: 5px;
    font-size: 0.75rem;
  }
`;

export const FormTitle = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 359px) {
    font-size: 1.25rem;
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
    font-size: 0.875rem;
  }
`;

export const SelectedParticipant = styled.div`
  display: inline-block;
  margin-right: 8px;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const RemoveParticipant = styled.div`
  display: inline-block;
  padding: 0.5rem;
  font-size: 1rem;
  color: #2d539e;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const Rowbetween = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
`;
