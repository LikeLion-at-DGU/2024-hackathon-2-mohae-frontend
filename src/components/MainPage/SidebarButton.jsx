    import React from "react";
    import styled from "styled-components";

    const FrameWrapper = styled.div`
    width: 291px;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 12px;
    `;

    const ButtonWrapper = styled.div`
    width: 116px;
    height: 25px;
    .box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 116px;
        height: 25px;
        position: relative;
        top: 0;
        left: 0;
        border: 2px solid #2d539e;
        border-radius: 30px;
        background-color: #ffffff;
    }
    .button {
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        transition: width 0.3s, background-color 0.3s, color 0.3s;
    }
    .active {
        width: 70px;
        background-color: #2d539e;
        color: #ffffff;
    }
    .inactive {
        width: 48px; /* Adjust the width of inactive button if needed */
        background-color: transparent;
        color: #2d539e;
    }
    `;

    const SidebarButton = ({ activeButton, setActiveButton }) => {
    return (
        <FrameWrapper>
        <ButtonWrapper>
            <div className="box">
            <div
                className={`button ${activeButton === "week" ? "active" : "inactive"}`}
                onClick={() => setActiveButton("week")}
            >
                주차
            </div>
            <div
                className={`button ${activeButton === "today" ? "active" : "inactive"}`}
                onClick={() => setActiveButton("today")}
            >
                최근
            </div>
            </div>
        </ButtonWrapper>
        </FrameWrapper>
    );
    };

    export default SidebarButton;
