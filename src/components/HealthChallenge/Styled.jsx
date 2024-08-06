import styled, { keyframes } from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem;

  @media (max-width: 359px) {
    margin: 0;
  }
`;

export const ToggleCircle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid ${props => (props.selected ? '#2D539E' : '#ccc')};
  background-color: ${props => (props.selected ? '#2D539E' : '#fff')};
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

export const HealthIcon = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
  &:hover {
    border: 2px solid #2D539E;
  }
`;

export const CustomPhotoButton = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
  &:hover {
    border: 2px solid #2D539E;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 0.625rem;

  @media (max-width: 359px) {
    width: 50px;
    height: 50px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const IconList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

export const BigBox = styled.div`
  display: flex;
  width: 1140px;
  flex-direction: column;
  position: relative;

  @media (max-width: 359px) {
    width: 320px;
    padding: 0 10px;
  }
`;

export const ChallengeTitle = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 1rem;

  @media (max-width: 359px) {
    font-size: 1rem;
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

  &:hover {
    color: #6b6a6a;
  }

  @media (max-width: 359px) {
    font-size: 1rem;
  }
`;

export const Rowbetween = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
`;

export const UnderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1140px;
  height: 355px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 359px) {
    width: 320px;
    height: 440px;
    overflow-y: scroll;
    justify-content: center;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  width: 32rem;
  height: 12rem;
  padding: 1.5rem;
  align-items: center;
  border-radius: 0.625rem;
  background-color: #FFF;
  box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: relative;

  @media (max-width: 359px) {
    padding: 0.5rem;
  }
`;

export const IMG = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 0.625rem;
  margin-right: 1rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const BoxText = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const JoinImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
`;

export const Run = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: #EBF1FF;
  padding: 0.25rem 0.5rem;
  color: #2D539E;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 359px) {
    font-size: 0.5rem;
  }
`;

export const DDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  background: #FFEBE1;
  color: #DE0000;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: ${props => props.isActive ? '#EBF1FF' : '#FFEBE1'};
  padding: 0.25rem 0.5rem;
  color: ${props => props.isActive ? '#2D539E' : '#DE0000'};
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.5rem;
    margin-top: 0.75rem;
    display: flex;
  }
`;

export const BoxTitle = styled.div`
  color: #2D539E;
  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
`;

export const BoxTime = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const ApplyButton = styled.button`
  display: flex;
  width: 10rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  color: #FFF;
  border-radius: 0.25rem;
  background: #2D539E;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
`;

export const BackWrapping = styled.div`
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

export const NewEventForm = styled.form`
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

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;

  @media (max-width: 359px) {
    padding: 1rem;
    gap: 0.25rem;
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

export const ContentContainer = styled.div`
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

export const EventInputStyle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-left: 30px;
  display: flex;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-family: "NanumSquareRound";
  padding: 0.344rem 0rem;

  outline: none;

  @media (max-width: 359px) {
    margin-left: 0;
    font-size: 0.875rem;
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

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #DE0000;
  font-size: 1.5rem;
  cursor: pointer;


`;
