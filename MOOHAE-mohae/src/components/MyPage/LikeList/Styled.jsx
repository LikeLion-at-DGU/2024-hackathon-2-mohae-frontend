import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LikeListHeaders = styled.div`
  display: flex;
  flex-direction: row;

  width: 1140px;
  gap: 0.625rem;

  @media (max-width: 359px) {
    width: 300px;
    gap: 0.25rem;
  }
`;

export const LikeLikeHeader = styled.div`
  display: flex;

  padding: 1.25rem 3.5rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$isSelected ? '#2D539E' : '#FFF'};
  color: ${props => props.$isSelected ? '#FFF' : '#000'};
  border-radius: 1rem 1rem 0rem 0rem;


  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  @media (max-width: 359px) {
    padding: 0.625rem 0.75rem;

    font-size: 0.75rem;
  }
`;

export const LikeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1044px;
  padding: 2rem 3rem;
  background-color: #FFF;
  border-radius: 0rem 1.25rem 1.25rem 1.25rem;
  @media (max-width: 359px) {
    width: 300px;
    padding: 1rem 1.5rem;
  }
`;

export const BuyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  animation: ${fadeIn} 0.3s ease-in-out;

  @media (max-width: 359px) {
    gap: 1rem;
  }
`;

export const BuyTime = styled.div`
  color: #2D539E;

  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const BuyDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 359px) {
    gap: 0.5rem;
  }
`;

export const BuyImage = styled.div`
  display: flex;
  width: 8.5rem;
  height: 8.5rem;
  margin-right: 2rem;

  background-color: lightcoral;

  @media (max-width: 359px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
`;

export const hi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BuyTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const BuySubTitle = styled.div`
  color: #838383;

  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.625rem;
  }
`;

export const BuyMoney = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
`;

export const CultureList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LearnList = styled.div`
  display: flex;
  flex-direction: column;
`;