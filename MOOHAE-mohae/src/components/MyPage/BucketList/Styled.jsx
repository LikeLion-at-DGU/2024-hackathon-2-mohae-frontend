import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BucketListContainer = styled.div`
  display: flex;
  width: 1044px;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 3rem;
  background-color: #FFF;
  border-radius: 1.25rem;
  margin-bottom: 2rem;
  max-height: 400px;

  @media (max-width: 359px) {
    width: 300px;
    padding: 0.5rem 1rem;
    gap: 0.625rem;
  }
`;

export const BucketListTitle = styled.div`
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

export const AddBucketList = styled.div`
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
`;

export const BucketListLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(152, 152, 152, 0.30);
`;

export const BucketList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;

  @media (max-width: 359px) {
    gap: 0.875rem;
    height: 5rem;
  }
`;

export const Bucket = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 3.5rem);
  height: 4rem;
  padding: 1rem 1.5rem;
  gap: 1rem;
  align-items: center;

  border-radius: 0.625rem;
  border: 2px solid #EDEDED;

  background: #F0F0F0;

  @media (max-width: 359px) {
    width: calc(100% - 2rem);
    height: 1.5rem;
    padding: 0.5rem 0.75rem;
  }
`;

export const BucketNumber = styled.div`
  color: #2D539E;

  text-align: center;
  font-family: "Nanum Pen Script";
  font-size: 4.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 2.5rem;
  }
`;

export const BucketContent = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.875rem;
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
  gap: 1rem;
`;

export const row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BucketListCloseButton = styled.button`
  background-color: #FFF;
  color: #2D539E;
  border: 1px solid  ;
  padding: 5px 10px;

  border-radius: 5px;
  width: 45%;
  font-size: 1rem;
`;

export const BucketListAddButton = styled.button`
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
  display: flex;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-family: "NanumSquareRound";
  padding: 0.344rem 0rem;
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
`;