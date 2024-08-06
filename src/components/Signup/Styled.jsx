import styled, { createGlobalStyle } from "styled-components";

import { PiCalendarBlank } from "react-icons/pi";

export const PageStyle = createGlobalStyle`
  body {
    background-color: #F7F8FB;
    margin: 0;
    padding: 0;
    display: flex;
    width: 1440px;
    justify-content: center;
    align-items: center;
    height: fit-content;
    @media (max-width: 359px) {
      background-color: #F7F8FB;
      margin: 0;
      padding: 0;
      display: flex;
      width: 360px;
      justify-content: center;
      align-items: center;
      height: fit-content;
    }
  }
`;

export const StyledPi = styled(PiCalendarBlank)`
  color: #2D539E;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;

  @media (max-width: 359px) {
    width: 1rem;
    height: 1rem;
    top: 0;
  }
`;

export const BackEffect = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 11rem;
  width: 130%;
  height: 100%;
  align-items: center;
  background: linear-gradient(120deg, #e1eaff 0%, #fff 52.4%, #dcfafc 100%);

  @media (max-width: 359px) {
    width: 105%;
    padding: 1rem;
  }
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;

  @media (max-width: 359px) {
    padding: 0;
  }
`;

export const MOHAEsytle = styled.h1`
  color: #2d539e;
  text-align: center;
  font-family: "Cafe24 Meongi B";
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 3rem;

  @media (max-width: 359px) {
    font-size: 1.5rem;
    height: 0.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 359px) {
    width: 300px;
    padding: 10px;
    justify-content: center;
  }
`;

export const FirstForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  padding: 3rem;
  border-radius: 0.5rem;
  background: #FFF;

  gap: 1.5rem;

  box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.10);

  @media (max-width: 359px) {
    width: 17rem;
    border-radius: 0.375rem;
    padding: 2rem;
    gap: 0.5rem;
  }
`;

export const SecondForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  padding: 3rem;
  border-radius: 0.5rem;
  background: #FFF;

  gap: 1.5rem;

  box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.10);

  @media (max-width: 359px) {
    width: 17rem;
    border-radius: 0.375rem;
    padding: 2rem;
    gap: 0.5rem;
  }
`;

export const ThirdForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  padding: 3rem;
  border-radius: 0.5rem;
  background: #FFF;

  gap: 1.5rem;

  box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.10);

  @media (max-width: 359px) {
    width: 17rem;
    border-radius: 0.375rem;
    padding: 2rem;
    gap: 0.5rem;
  }
`;

export const FormTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 1.25rem;
  }
`;

export const FormSubtitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.625rem;
  }
`;

export const FormSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 359px) {
    gap: 0.375rem;
  }
`;

export const FormText = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 359px) {
    font-size: 1rem;
  }
`;

export const FormInput = styled.input`
  display: flex;
  padding: 1rem 1rem;

  outline: none;
  border: none;

  font-family: 'NanumSquareRound';
  font-size: 1rem;

  border-radius: 0.625rem;
  border: 1px #ABABAB;

  background: #F7F8FB;

  color: #ABABAB;

  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.75rem;
    padding: 0.625rem;
  }
`;

export const FormInputRow = styled.input`
  display: flex;
  padding: 1rem 1rem;

  outline: none;
  border: none;

  font-family: 'NanumSquareRound';
  font-size: 1rem;

  border-radius: 0.625rem;
  border: 1px #ABABAB;

  background: #F7F8FB;

  color: #ABABAB;

  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    width: 110px;
    font-size: 0.75rem;
    padding: 0.625rem;
  }
`;

export const FormInputforDate = styled.div`
  display: flex;
  padding: 1rem 1rem;

  outline: none;
  border: none;

  font-family: 'NanumSquareRound';
  font-size: 1rem;

  border-radius: 0.625rem;
  border: 1px #ABABAB;

  background: #F7F8FB;

  color: #ABABAB;

  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.75rem;
    padding: 0.625rem;
    padding-left: 2rem;
  }
`;

export const FormSemiText = styled.div`
  display: flex;

  color: #535353;

  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;  

  @media (max-width: 359px) {
    gap: 0.25rem;
  }
`;

export const Tag = styled.div`
  background-color: #e1eaff;
  color: #2d539e;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 5px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2d539e;
    color: #fff;
  }

  @media (max-width: 359px) {
    font-size: 0.75rem;
    margin: 2px;
  }
`;

export const Buttonlist = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1rem;
  justify-content: space-between;
`;

export const PrevButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  padding: 1rem 0rem;

  border: 3px solid #F0F0F0;
  border-radius: 1rem;
  background: #FFF;

  color: #5D5C61;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
  &:hover {
    background-color: #F0F0F0;
  }

  @media (max-width: 359px) {
    font-size: 0.75rem;
    padding: 0.5rem 0rem;
    border-radius: 0.5rem;
  }
`;

export const NextButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  padding: 1rem 0rem;

  border-radius: 1rem;
  background: #2D539E;

  color: #FFF;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  &:hover {
    background-color: #1d3e7f;
    color: #F0F0F0;
  }

  @media (max-width: 359px) {
    font-size: 0.75rem;
    padding: 0.5rem 0rem;
    border-radius: 0.5rem;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PreviewImage = styled.img`
  margin: 10px;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 70px;
  border: 2px solid #ddd;

  @media (max-width: 359px) {
    width: 40px;
    height: 40px;
  }
`;

export const CustomPhotoButton = styled.img`
  display: block;
  width: 70px;
  cursor: pointer;
  margin: 0 auto;
  transition: box-shadow 0.3s ease, transform 0.1s ease;

  &:active {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(0.98);
  }

  @media (max-width: 359px) {
    width: 40px;
    height: 40px;
  }
`;

export const NameRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 8rem;

  @media (max-width: 359px) {
    gap: 0;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  @media (max-width: 359px) {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const ContentTitle = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 1rem;
  }
`;

export const Content = styled.div`
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

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  gap: 3rem;
  height: 22rem;
  overflow-y: scroll;
  border: 1px solid #D9D9D9;

  @media (max-width: 359px) {
    width: 240px;
    gap: 1rem;
  }
`;

export const BasicImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`;

export const BasicImage = styled.img`
  width: 80px;
  @media (max-width: 359px) {
    width: 50px;
    height: 50px;
  }
`;