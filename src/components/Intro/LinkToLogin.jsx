import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const PageStyle = createGlobalStyle`
    body {
        background-color: #FFFFFF;
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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; /* 원래 텍스트 색상을 유지하려면 사용 */

    &:hover {
        text-decoration: none; /* 호버 시에도 밑줄 없앰 */
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

const ButtonWrapper = styled.div`
    position: absolute;
    left: 378px; 
    bottom: 103px; 
    transform: translateX(-50%); 
    display: flex;
    gap: 30px;
    width: 100%;
    justify-content: center;
`;

const Button = styled.button`
    width: 200px; /* 고정된 너비 */
    height: 50px; /* 고정된 높이 */
    font-size: 24px; /* 크기에 맞춘 폰트 사이즈 */
    font-weight: 600;
    border-radius: 30px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`;

const LoginButton = styled(Button)`
    background-color: #2D539E;
`;

const SignUpButton = styled(Button)`
    background-color: #ABBFE7;
`;

const LinkToLogin = () => {
    return (
        <>
            <PageStyle />
            <FirstFrame>
                <img src="/src/assets/img/IntroMainPage.png" alt="Error" />
                <ButtonWrapper>
                    <StyledLink to="/Login">
                        <LoginButton>로그인</LoginButton>
                    </StyledLink>
                    <StyledLink to="/Login">
                        <SignUpButton>회원가입</SignUpButton>
                    </StyledLink>
                </ButtonWrapper>
            </FirstFrame>
        </>
    );
};

export default LinkToLogin;
