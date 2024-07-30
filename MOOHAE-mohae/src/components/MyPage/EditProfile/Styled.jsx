import styled, {keyframes} from 'styled-components';

export const EditProfileContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  
  width: 8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 2rem 14rem;
  background-color: #FFF;
  border-radius: 1.25rem;
  border: 2.5px solid #D9D9D9;
`;

export const EditProfileImage = styled.div`
  width: 7.75rem;
  height: 7.75rem;
  position: relative;
  border-radius: 7.75rem;
  background-color: #000;
`;

export const EditProfileLogo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const EditProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

export const EditProfileName = styled.div`
  color: #000;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const EditProfileText = styled.div`
  color: #9F9F9F;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;