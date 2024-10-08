import styled, {keyframes} from 'styled-components';

import { FaPen, FaUserPlus, FaTimes } from "react-icons/fa";
import { LuMail, LuMailPlus } from "react-icons/lu";



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledTimes = styled(FaTimes)`
  width: 30px;
`;

export const StyledPen = styled(FaPen)`
  width: 40px;
`;

export const StyledUser = styled(FaUserPlus)`
  width: 40px;
`;


export const EditFamilyContainer = styled.div`
  display: flex;
  position: relative;
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
    margin-top: 0;

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

export const FamilyProfile = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  object-fit: cover;
  

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
  display: flex;
  color: #9f9f9f;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    color: #6b6a6a;
  }

  @media (max-width: 359px) {
    font-size: 1rem;
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
  border-radius: 2.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 500px;
  max-width: 90%;
  z-index: 1000;

  animation: ${fadeIn} 0.3s ease-in-out;

  @media (max-width: 359px) {
    min-width: 150px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  position: relative;
`;

export const FormTitle = styled.div`
  color: #000;

  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 1.25rem;
  }
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

export const SelectForm = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4.5rem;
  right: 0rem;
  width: 18rem;
  height: 10rem;
  
  border-radius: 1rem;
  border: 1px solid #D9D9D9;
  background-color: #FFF;
  box-shadow: 0.5px 1px 15px 0px rgba(0, 0, 0, 0.20);

  @media (max-width: 359px) {
    width: 10rem;
    height: 5rem;
  }
`;

export const Selection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #D9D9D9;
  gap: 1rem;

  color: #000;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const Selection2 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: #000;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const FormSubtitle = styled.div`
  color: #9F9F9F;

  font-family: 'NanumSquareRound';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const FormInput = styled.input`
  display: flex;
  width: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem 1rem 7rem;
  margin: 1rem 5rem;
  border-radius: 2rem;

  border: none;
  outline: none;

  background-color: #EDEDED;

  color: #2d539e;
  font-family: 'NanumSquareRound';
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 1rem;
    margin: 1rem 1rem 1rem 1rem;
    padding: 1rem 3rem;
  }
`;

export const PostButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2D539E;
  border-radius: 1rem;

  margin: 0rem 8rem;
  padding: 0.75rem 0rem;

  color: #FFF;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    margin: 2rem; 
    font-size: 1rem;
  }
`;

export const Sharp = styled.div`
  display: flex;
  position: absolute;
  font-size: 2.125rem;
  color: #2d529e;
  font-weight: 900;
  top: 8.75rem;
  left: 12rem;

  @media (max-width: 359px) {
    top: 8.125rem;
    left: 4.5rem;
    font-size: 1.5rem;
  }
`;

export const Rowdi = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormInput2 = styled.input`
  display: flex;
  width: 75%;
  height: 5rem;
  justify-content: center;
  align-items: center;


  border-radius: 0.625rem;
  border: 1px #ABABAB;

  background: #F7F8FB;

  color: #ABABAB;

  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const inputbutton = styled.button`
  display: flex;
  width: 25%;
  height: 5rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.625rem;
  background: #2D539E;

  color: #FFF;

  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Formprint2 = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  margin-top: 1.5rem;
  border: none;
  outline: none;
  background-color: #EDEDED;
  color: #2d539e;
  font-family: 'NanumSquareRound';
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SendingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SendIcon = styled(LuMail)`
  width: 2rem;
  height: 2rem;
  border: 1px solid #9d9d9d;
  border-radius: 2rem;
  padding: 0.75rem;
`;

export const SendText = styled.div`
  display: flex;
`;

export const Phone = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Phoneadding = styled.div`
  display: flex;
  gap: 1rem;
  color: #9F9F9F;
  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StyleiconLu = styled(LuMailPlus)`
  width: 1.25rem;
  height: 1.25rem;
`;

export const PhoneNumberInput = styled.input`
  display: flex;
  width: 360px;
  width: 25%;
  height: 5rem;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 0rem 3rem 0rem 2rem;
  border-radius: 0.625rem;
  border: 1px #ABABAB;
  background: #F7F8FB;
  color: #ABABAB;
  font-family: 'NanumSquareRound';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SendingButton = styled.div`
  display: flex;
  height: 71px;
  padding: 7px 55px;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  background: #2D539E;
  color: #FFF;
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 30px;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;