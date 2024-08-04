import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const PageStyle = createGlobalStyle`
    body {
        background-color: #F2F2F2;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh; /* 화면 전체를 채우도록 설정 */
        user-select: none; /* 텍스트 선택 방지 */
        overflow: hidden; /* 선택 방지를 위해 스크롤 숨김 */    
    }
`;



const FirstFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px; /* 픽스된 크기 */
    height: 600px; /* 픽스된 크기 */
    position: relative; /* 자식 요소의 절대 위치를 위한 설정 */
    border-radius: 10px;

    img {
        width: fit-content;
        height: auto;
        border-radius: 10px;
    }
`;


const IntroTeam = () => {
    return (
        <>
            <PageStyle />
            <FirstFrame>
                <img src="/src/assets/img/IntroTeam.png" alt="Error" />
                
            </FirstFrame>
        </>
    );
};

export default IntroTeam;
