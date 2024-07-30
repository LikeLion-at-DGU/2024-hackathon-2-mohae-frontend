import styled, {keyframes} from 'styled-components';

export const EditFamilyContainer = styled.div`
  display: flex;
  width: 1044px;
  margin-top: 2rem;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 3rem;
  background-color: #FFF;
  border-radius: 1.25rem;
`;

export const EditFamilyTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
`;

export const FamilyName = styled.div`
  color: #000;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AddFamily = styled.div`
  color: #9F9F9F;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;