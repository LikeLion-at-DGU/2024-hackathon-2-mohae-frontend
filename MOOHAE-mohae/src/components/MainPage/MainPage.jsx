import React from "react";
import styled from "styled-components";
import Navigator from "./Navigator";
import SidebarDaily from "./SidebarDaily";
import AboutMohae from "./AboutMohae";

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
gap: 3px;
height: 100vh; /* 부모 요소의 전체 높이를 사용 */
`;

const LeftBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 30px;
padding-left: 10px;
padding-top: 30px;
height: 100%; /* 부모 요소의 전체 높이를 사용 */
`;

const RightBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 291px;
height: 100%; /* 부모 요소의 전체 높이를 사용 */
padding-top: 30px;
`;

const MainPage = () => {
return (
    <Container>
    <LeftBlock>
        <Navigator />
        <AboutMohae />
    </LeftBlock>
    <RightBlock>
        <SidebarDaily />
    </RightBlock>
    </Container>
);
};

export default MainPage;