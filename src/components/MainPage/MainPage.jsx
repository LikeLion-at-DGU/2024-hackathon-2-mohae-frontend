import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navigator from "./Navigator";
import AboutMohae from "./AboutMohae";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Maintain minimum height */
`;


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* Allow content to expand */
  overflow: auto; /* Enable scrolling if content overflows */
`;


const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding-left: 10px;
    padding-top: 30px;
`;

const RightBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 291px;
    padding-top: 30px;
    gap: 10px;

    .ButtonFrame {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    .content {
        opacity: 0;
        transition: opacity 1s ease-in-out;
        &.visible {
        opacity: 1;
        }
    }
`;

const MainPage = () => {
    const [activeButton, setActiveButton] = useState("week");
    const [visibleContent, setVisibleContent] = useState("week");

    useEffect(() => {
        window.scrollTo(0, 0); // 페이지 로딩 시 스크롤을 최상단으로 이동
    }, []);

    const handleButtonClick = (button) => {
        setActiveButton(button);
        setTimeout(() => {
        setVisibleContent(button);
        }, 10);
    };

    return (
        <Container>
        <ContentWrapper>
            <LeftBlock>
            <Navigator />
            <AboutMohae />
            </LeftBlock>
        </ContentWrapper>
        <Footer />
        </Container>
    );
};

export default MainPage;
