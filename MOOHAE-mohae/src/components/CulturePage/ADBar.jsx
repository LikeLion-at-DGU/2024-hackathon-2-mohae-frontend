import React from "react";
import styled from "styled-components";

const FrameWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`; 

const ImgWrapper = styled.div`
    width: 800px;
    height: 262px;
    border-radius: 30px;
`;

const ADBar = () => {

    return (
        <>
        <FrameWrapper>
            <ImgWrapper>
                <img src="/src/assets/img/ADimg.png" alt="error"></img>
            </ImgWrapper>
            <button>
                <img src="/src/assets/img/ArrowButton_left.png"></img>
            </button>
            <ImgWrapper>
                <img src="/src/assets/img/ADimg.png" alt="error"></img>
            </ImgWrapper>
            <button>
                <img src="/src/assets/img/ArrowButton_right.png"></img>
            </button>
        </FrameWrapper>
        </>
    );
};

export default ADBar;