import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2D539E;
  margin-top: 2rem;
  border-radius: 1.25rem;
  width: 1060px;
  padding: 20px 40px 40px 40px;
  animation: ${fadeIn} 0.5s ease-in;
`;

export const ScheduleText = styled.p`
  color: #FFF;
  font-family: "NanumSquareRound";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
`;

export const ScheduleBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleBox = styled.div`
  display: flex;
  width: 26%;
  height: 50px;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  border-radius: 0.625rem;
  background-color: #FFF;
`;

export const ScheduleToday = styled.div`
  color: #000;
  font-family: "NanumSquareRound";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 800;
`;

export const ScheduleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleTitle = styled.div`
  color: #2d539e;
  font-family: "NanumSquareRound";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
`;

export const ScheduleTime = styled.div`
  color: #2d539e;
  font-family: "NanumSquareRound";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
`;