import styled, {keyframes} from 'styled-components';


export const MedicineContainers = styled.div`
  display: flex;
  width: 1140px;
  overflow-x: scroll;
  white-space: nowrap;
  gap: 1rem;
`;

export const MedicineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 332px;


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
`;

export const MedicineWho = styled.p`
  color: #4081ff;
  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

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

export const ProfileImage = styled.image`
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

export const CheckTime = styled.p`
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
`;

export const CheckNoCircle = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;

  border-radius: 2.5rem;
  background-color: #FFF;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CheckBar = styled.div`
  display: flex;
  width: 300px;
  margin: 1rem;
  position: relative;
`;

export const CheckBarAll = styled.div`
  width: 300px;
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
  width: 33%;
  left: 33%;
  height: 5px;
  border: 20px;
  background-color: #2D539e;
`;

export const CheckBar100 = styled.div`
  position: absolute;
  width: 33%;
  left: 66%;
  height: 5px;
  border: 20px;
  background-color: #2D539e;
`;