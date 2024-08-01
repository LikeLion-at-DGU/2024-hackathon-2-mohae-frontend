import styled, {keyframes} from 'styled-components';

export const BucketListContainer = styled.div`
  display: flex;
  width: 1044px;
  margin-top: 2rem;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 3rem;
  background-color: #FFF;
  border-radius: 1.25rem;

  height: 500px;
  overflow-y: scroll;
`;

export const BucketListTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AddBucketList = styled.div`
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

export const BucketListLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(152, 152, 152, 0.30);
`;

export const BucketList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
`;

export const BucketNumber = styled.div`
  color: #2D539E;

  text-align: center;
  font-family: "Nanum Pen Script";
  font-size: 4.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BucketContent = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;