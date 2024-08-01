    import React, { useState } from "react";
    import styled from "styled-components";
    import Navigator from "./Navigator";
    import SidebarDaily from "./SidebarDaily";
    import SidebarWeekly from "./SidebarWeekly";
    import AboutMohae from "./AboutMohae";
    import SidebarButton from "./SidebarButton";

    
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

    const handleButtonClick = (button) => {
        setActiveButton(button);
        setTimeout(() => {
        setVisibleContent(button);
        }, 10); 
    };

    return (
        <Container>
        <LeftBlock>
            <Navigator />
            <AboutMohae />
        </LeftBlock>
        <RightBlock>
            <SidebarButton activeButton={activeButton} setActiveButton={handleButtonClick} />
            <div className={`content ${visibleContent === "today" ? "visible" : ""}`}>
            {visibleContent === "today" && <SidebarDaily />}
            </div>
            <div className={`content ${visibleContent === "week" ? "visible" : ""}`}>
            {visibleContent === "week" && <SidebarWeekly />}
            </div>
        </RightBlock>
        </Container>
    );
    };

    export default MainPage;
