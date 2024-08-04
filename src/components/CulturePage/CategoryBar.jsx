import React, { useState } from "react";
import styled from "styled-components";

const FrameWrapper = styled.div`
    width: 100%;
    max-width: 1140px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
`;

const TextWrapper = styled.div`
    font-size: 25px;
    font-weight: 400;
    width: 100%;
    height: 82px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
`;

const CategoryBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    flex-wrap: wrap;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 25px;
    background-color: ${(props) => (props.isActive ? '#FFFFFF' : 'transparent')};
    border-radius: ${(props) => (props.isActive ? '10px' : '0')};
    box-shadow: ${(props) => (props.isActive ? '0px 2px 15px -2px #00000040' : 'none')};
    cursor: pointer;
    img{
        width: 100px;
        height: 100px;
    }
    .MenuName{
        font-size: 23px;
        font-weight: 400;
    }
`;

const CategoryBar = ({ setSelectedCategory }) => {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index) => {
        setActiveButton(index);
        setSelectedCategory(index);
    };

    return (
        <FrameWrapper>
            <TextWrapper>카테고리</TextWrapper>
            <CategoryBox>
                <Buttons isActive={activeButton === 0} onClick={() => handleButtonClick(0)}>
                    <img src="/src/assets/img/Entertainment.png" alt="Entertainment"/>
                    <div className="MenuName">볼거리</div>
                </Buttons>
                <Buttons isActive={activeButton === 1} onClick={() => handleButtonClick(1)}>
                    <img src="/src/assets/img/Travle.png" alt="Travel"/>
                    <div className="MenuName">추억거리</div>
                </Buttons>
                <Buttons isActive={activeButton === 2} onClick={() => handleButtonClick(2)}>
                    <img src="/src/assets/img/Activity.png" alt="Activity"/>
                    <div className="MenuName">놀거리</div>
                </Buttons>
                <Buttons isActive={activeButton === 3} onClick={() => handleButtonClick(3)}>
                        <img src="/src/assets/img/Education.png"></img>
                        <div className="MenuName">배울거리</div>
                </Buttons>
            </CategoryBox>
        </FrameWrapper>
    );
};

export default CategoryBar;
