import styled, {keyframes} from 'styled-components';

import { RiSendPlaneFill } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledRI = styled(RiSendPlaneFill)`
  width: 25px;
  height: 25px;
  display: flex;
  margin: auto;
`;

export const StyledMD = styled(MdKeyboardVoice)`
  width: 25px;
  height: 25px;
  display: flex;
  margin: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  gap: 1rem;
  
  @media (max-width: 359px){
    right: 0.5rem;
    max-height: 7000px;
  }
`;

export const MomoIcon = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  padding: 5px 3px 5px 2px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 30px;
  background: #2D539E;
  box-shadow: 0px 1px 26px 0px rgba(0, 0, 0, 0.25);

  color: #FFF;

  text-align: center;
  font-family: "Cafe24 Meongi B";
  font-size: 7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  animation: ${fadeIn} 0.3s ease-in-out;

  user-select: none;

  @media (max-width: 359px){
    width: 2.25rem;
    height: 2rem;
    border-radius: 0.75rem;
    font-size: 3rem;
  }
`;

export const MomoIcon2 = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  padding: 5px 3px 5px 2px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 30px;
  background: #2D539E;
  box-shadow: 0px 1px 26px 0px rgba(0, 0, 0, 0.25);

  color: #FFF;

  text-align: center;
  font-family: "Cafe24 Meongi B";
  font-size: 7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const XIcon = styled.div`
  display: flex;
  width: 5.375rem;
  height: 5.375rem;
  font-size: 3.25rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.20);

  border-radius: 2rem;
  animation: ${fadeIn} 0.3s ease-in-out;

  @media (max-width: 359px) {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.75rem;
    font-size: 2rem;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  padding: 1rem;

  gap: 1rem;

  border-radius: 2rem;
  background: #FFF;
  box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.20);

  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 359px) {
    width: 18rem;
  }
`;

export const HeadBox = styled.div`
  display: flex;
  height: 5rem;
  gap: 0.75rem;
  border-bottom: 1px solid  rgba(217, 217, 217, 0.50);
`;

export const HeadBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 27rem;
  overflow-y: scroll;

  @media (max-width: 359px) {
    height: 24rem;
  }
`;

export const HeadFooter = styled.div`
  display: flex;
  padding: 0rem 0.5rem;

  border: none;
  border-radius: 1.25rem;
  background: #EDEDED;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Text1 = styled.div`
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 1.25rem;
  }
`;

export const Text2 = styled.div`
  color: #9F9F9F;

  font-family: 'NanumSquareRound';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 1rem;
  }
`;

export const TextBox = styled.input`
  display: flex;
  margin-left: 1rem;
  width: 75%;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
  outline: none;

  color: #9F9F9F;

  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border: none;
  background-color: #EDEDED;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-end;
`;

export const TextContain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem;
  flex-direction: column;
  gap: 0.5rem;
  width: 14.5rem;

  border-radius: 1.25rem;
  background: #EDEDED;
`;

export const TextContain2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.75rem;
  flex-direction: column;
  gap: 0.5rem;
  width: 14.5rem;

  border-radius: 1.25rem;
  background: #EDEDED;
`;

export const MomoText1 = styled.div`
  color: #353535;

  font-family: 'NanumSquareRound';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 1rem;
  }
`;

export const MomoText2 = styled.div`
  color: #353535;

  font-family: 'NanumSquareRound';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 359px) {
    font-size: 0.875rem;
  }
`;

export const MomoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const MomoText3 = styled.div`
  color: #353535;

  font-family: 'NanumSquareRound';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 0.375rem 0.75rem;

  border-radius: 1rem;
  border: 1px #EDEDED;

  background: #FFF;

  @media (max-width: 359px) {
    font-size: 0.75rem;
  }
`;

export const MomoText4 = styled.div`
  display: flex;
  justify-content: space-between;
  color: #353535;

  font-family: 'NanumSquareRound';
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;