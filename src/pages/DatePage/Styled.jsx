import { styled, createGlobalStyle } from "styled-components";



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
    width: 360px;
    }
  }
`;

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  width: 1140px;

  @media (max-width: 359px) {
    width: 350px;
  }
`;

export const CalendarFilter = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 359px) {
    margin-left: 0.5rem;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }
`;

export const CalendarFilterText = styled.p`
  color: #000;
  font-family: "NanumSquareRound";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;

  @media (max-width: 359px) {
    font-size: 0.5rem;
  }
`;

export const CalendarFitlerContent = styled.div`
  display: flex;
  align-items: center;
  
  gap: 1rem;

  @media (max-width: 359px) {
    gap: 0.5rem;
  }
`;

export const CalendarFilterContentAll = styled.div`
  display: flex;

  color: #2D539E;

  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;

  cursor: pointer;

  @media (max-width: 359px) {
    font-size: 0.5rem;
  }
`;

export const CalendarFilterContentDe = styled.div`
  display: flex;
  
  color: #ABABAB;

  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;

  padding: 0.375rem 1.25rem;
  background-color: #FFF;
  border-radius: 100px;

  cursor: pointer;

  @media (max-width: 359px) {
    font-size: 0.5rem;
    padding: 0.25rem 0.75rem;
  }

  // background-color: #2D539E;
  // color: #FFF;
`;

export const Calendars = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1rem;

  @media (max-width: 359px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const SideSchedules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 359px) {
    font-size: 0.5rem;
  }
`;