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
  position: relative;
  flex-direction: column;
  background-color: ${props => props.$bgColor || '#FFFFFF'};
  margin-top: 2rem;
  border-radius: 1.25rem;
  
  padding: 1.25rem 2.5rem 2.5rem 2.5rem;
  animation: ${fadeIn} 0.5s ease-in-out;

  width: 1060px;

  @media (max-width: 359px) {
    width: 280px;
    padding: 0rem 0.5rem 0.5rem 0.5rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
  }
`;

export const ScheduleText = styled.p`
  color: #FFF;
  font-family: "NanumSquareRound";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 359px) {
    font-size: 0.5rem;
  }
`;

export const ScheduleBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleBox = styled.div`
  display: flex;
  width: 26%;
  height: 3.125rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  border-radius: 0.625rem;
  background-color: #FFF;

  @media (max-width: 359px) {
    height: 1.75rem;
    padding: 0.25rem 0.25rem;
  }
`;

export const ScheduleToday = styled.div`
  color: #000;
  font-family: "NanumSquareRound";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 800;

  @media (max-width: 359px) {
    font-size: 0.5rem;
    font-weight: 700;
  }
`;

export const ScheduleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 359px) {
    flex-direction: column;
    gap: 0.125rem;
  }
`;

export const ScheduleTitle = styled.div`
  color: #2d539e;
  font-family: "NanumSquareRound";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 359px) {
    font-size: 0.375rem;
  }
`;

export const ScheduleTime = styled.div`
  color: #2d539e;
  font-family: "NanumSquareRound";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 359px) {
    font-size: 0.375rem;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 4rem;
  font-weight: 400;
  cursor: pointer;
  color: #333;
  ${(props) => (props.$left ? 'left: -50px;' : 'right: -50px;')}

  &:hover {
    color: #000;
    font-weight: 550;
  }

  @media (max-width: 359px) {
    font-size: 2rem;
    ${(props) => (props.$left ? 'left: -27px;' : 'right: -27px;')}
  }
`;