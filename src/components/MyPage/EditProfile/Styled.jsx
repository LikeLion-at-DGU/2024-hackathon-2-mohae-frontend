import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const EditProfileContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 14rem;
  background-color: #FFF;
  border-radius: 1.25rem;
  border: 2.5px solid #D9D9D9;

  @media (max-width: 359px) {
    width: 8rem;
    padding: 1rem 4.5rem;
  }
`;

export const EditProfileImage = styled.div`
  width: 7.75rem;
  height: 7.75rem;
  position: relative;
  border-radius: 7.75rem;

  @media (max-width: 359px) {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 4.5rem;
  }
`;

export const IMG = styled.img`
  width: 7.75rem;
  height: 7.75rem;
  border-radius: 10rem;
  @media (max-width: 359px) {
    width: 4rem;
    height: 4rem;
  }
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

  @media (max-width: 359px) {
    gap: 0.375rem;
  }
`;

export const EditProfileName = styled.div`
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

export const EditProfileText = styled.div`
  display: flex;
  color: #9f9f9f;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.375rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #6b6a6a;
  }

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;


export const backWrapping = styled.div`
  width: 130%;
  height: 100%;
  position: fixed;
  top: 0;
  left: -15%;
  z-index: 100;
  background: rgba(159, 159, 159, 0.50);

  @media (max-width: 359px) {
    width: 106%;
    position: fixed;
    top: 0;
    left: -3%;
  }
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

export const EditProfileCloseButton = styled.button`
  background-color: #FFF;
  color: #2D539E;
  border: 1px solid;
  padding: 5px 10px;
  border-radius: 5px;
  width: 45%;
  font-size: 1rem;
`;

export const EditProfileAddButton = styled.button`
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
  justify-content: space-around;
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
  outline: none;
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

export const PreviewContainer = styled.div`
  margin-top: 1rem;
`;

export const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const CustomPhotoButton = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const LogoutButton = styled.div`
  display: flex;
  margin-top: 2rem;
  color: #ff7b7b;
  border: 3px solid #ff7b7b;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    color: #ff0000;
    border: 3px solid #ff0000;
  }

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;