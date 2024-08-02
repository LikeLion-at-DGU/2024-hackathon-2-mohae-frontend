import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const MedicineContainers = styled.div`
  display: flex;
  width: 1140px;
  position: relative;
  white-space: nowrap;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 359px) {
    width: 320px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IMG = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 359px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const MedicineTitle1 = styled.div`
  color: #000;

  font-family: "NanumSquareRound";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const MedicineContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  color: #2d539e;

  font-family: "NanumSquareRound";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.5rem;
  }
`;

export const MedicineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 332px;
  overflow-x: scroll;


  background-color: #FFF;
  border-radius: 1.25rem;

  box-shadow: 0.5px 1px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const MedicineHeader = styled.div`
  display: flex;
  height: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1rem 0.5rem 1rem;

  @media (max-width: 359px) {
    padding: 0rem;
  }
`;

export const MedicineWho = styled.div`
  color: #4081ff;
  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MoreDetail = styled.p`
  color: #989898;
  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const MedicineTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 0rem 1rem 0rem 1rem;
`;

export const ProfileImage = styled.div`
  width: 3.125rem;
  height: 3.125rem;

  border-radius: 3.125rem;
  background-color: rebeccapurple;
`;

export const MedicineNotice = styled.p`
  color: #000;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Checks = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  gap: 2.25rem;
`;

export const Check = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`;

export const CheckTime = styled.div`
  color: #2d539e;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CheckCircle = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;

  border-radius: 2.5rem;
  background-color: #2d539e;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  animation: ${fadeIn} 0.2s ease-in-out;

  &:hover {
    background-color : #1D3E7F;
  }
`;

export const CheckNoCircle = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;

  border-radius: 2.5rem;
  background-color: #FFF;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  animation: ${fadeIn} 0.2s ease-in-out;

  &:hover {
    background-color: #F0F0F0;
  }
`;

export const CheckBar = styled.div`
  display: flex;
  width: 300px;
  margin: 1rem;
  position: relative;
`;

export const CheckBarAll = styled.div`
  width: 300px;
  margin: auto;
  height: 5px;
  border: 20px;
  background-color: #D9D9D9;
`;

export const CheckBar33 = styled.div`
  position: absolute;
  width: 33%;
  height: 5px;
  border: 20px;
  background-color: #2D539e;
`;

export const CheckBar66 = styled.div`
  position: absolute;
  width: 34%;
  left: 33%;
  height: 5px;
  border: 20px;
  background-color: #2D539e;
`;

export const CheckBar100 = styled.div`
  position: absolute;
  width: 33%;
  left: 67%;
  height: 5px;
  border: 20px;
  background-color: #2D539e;
`;

export const AddButton = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  color: #9f9f9f;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const Realative = styled.div`
  width: 1140px;
  display: flex;
  position: relative;
  @media (max-width: 359px) {
    width: 360px;
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

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
`;

export const row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MedicineCloseButton = styled.button`
  background-color: #FFF;
  color: #2D539E;
  border: 1px solid  ;
  padding: 5px 10px;

  border-radius: 5px;
  width: 45%;
  font-size: 1rem;
`;

export const MedicineAddButton = styled.button`
  background-color: #2D539E;
  color: #FFF;
  border: none;
  padding: 5px 10px;

  border: 1px solid #2D539E;

  border-radius: 5px;
  width: 45%;
  font-size: 1rem;
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

export const FormText = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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