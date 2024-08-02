import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const EditFamilyContainer = styled.div`
  display: flex;
  width: 1044px;
  margin-top: 2rem;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 3rem;
  background-color: #FFF;
  border-radius: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 359px) {
    width: 300px;
    padding: 0.5rem 1rem;

    gap: 0.625rem;
  }
`;

export const EditFamilyTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const EditFamilyLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(152, 152, 152, 0.30);
`;

export const EditFamilyList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;

  @media (max-width: 359px) {
    gap: 1rem;
    overflow-x: scroll;
  }
`;

export const EditFamily = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
`;

export const FamilyProfile = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  background-color: #000;

  @media (max-width: 359px) {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
  }
`;

export const FamilyName = styled.div`
  color: #000;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
`;

export const AddFamily = styled.div`
  color: #9F9F9F;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 359px) {
    align-items: center;
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
  border-radius: 2.25rem;
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
  gap: 1rem;
`;

export const FormTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const InviteCode = styled.div`
  display: flex;
  padding: 1rem 8rem;
  margin: 1rem 3rem;
  justify-content: center;
  align-items: center;

  border-radius: 2rem;
  background-color: #EDEDED;

  color: #2D539E;

  font-family: 'NanumSquareRound';
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 359px) {
    border-radius: 1.5rem;
    padding: 1rem 3rem;
    margin: 0rem;
    font-size: 1.5rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`;

export const Iconset = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const IconText = styled.div`
  display: flex;

  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
`;