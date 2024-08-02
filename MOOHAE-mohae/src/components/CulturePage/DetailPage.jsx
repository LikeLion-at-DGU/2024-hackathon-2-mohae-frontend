import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { useLocation } from "react-router-dom"; 

const Container = styled.div`
    width: 99%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
    padding: 30px;
`;

const TopBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 58px;
    width: 100%;
    height: fit-content;
`;

const Thumbnail = styled.div`
    img {
        width: 500px;
        height: 500px;
        border-radius: 20px;
        background-color: #FFFFFF;
    }
`;

const Location = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 6px 15px;
    font-size: 21px;
    color: #2d539e80;
    background-color: #ebf1ff;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const Title = styled.div`
    font-size: 36px;
    font-weight: bold;
`;

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative; 
    width: 512px;
    height: 54px;
    background-color: #FAFAFA;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 21px;
    font-weight: bold;
    gap: 8px;
    img {
        width: 30px;
        height: 30px;
    }
`;

const DateButton = styled.button`
    width: 117px;
    height: 45px;
    font-size: 16px;
    background-color: #353535;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    left: 395px;
`;

const DatePickerWrapper = styled.div`
    position: absolute;
    top: 60px; /* DateContainer 바로 아래에 위치하도록 설정 */
    z-index: 1000; /* 다른 요소 위에 나타나도록 z-index 설정 */
`;

const PeopleContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative; 
    width: 512px;
    height: 54px;
    background-color: #FAFAFA;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 21px;
    font-weight: bold;
    gap: 8px;
`;
const CounterBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 390px;

`;

const CounterButton = styled.button`
    width: 56px;
    height: 45px;
    font-size: 18px;
    margin: 0 3px;
    background-color: #353535;
    color: #FFFFFF;
    border-radius: 5px;
`;

const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%; 
    font-size: 27px;
    font-weight: 700;
    padding: 0 10px; 
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 30px;
    img {
        width: 70px;
        height: 70px;
    }
    button {
        width: 412px;
        height: 70px;
        background-color: #2D539E;
        color: #FFFFFF;
        font-size: 30px;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }
`;

const Detail = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px; 
`;

const BottomBox = styled.div`
    width: 1130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 10px;  
    padding-left: 50px;
    gap: 50px;
`;

const TextBox = styled.div`
    width: fit-content;
    height: fit-content;
    .Header {
        font-size: 32px;
        font-weight: 700;
    }
    .Description {
        font-size: 25px;
        font-weight: 400;
    }
`;

const DetailPage = () => {
    const location = useLocation(); 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);
    const [people, setPeople] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    const handleIncreasePeople = () => {
        setPeople(people + 1);
    };

    const handleDecreasePeople = () => {
        if (people > 1) {
            setPeople(people - 1);
        }
    };

    const handlePurchase = () => {
        console.log("Purchase button clicked!");
    };

    return (
        <Container>
            <TopBox>
                <Thumbnail><img src="/src/assets/img/Example.png" alt="Error" /></Thumbnail>
                <Detail>
                    <Location>{location.state?.card?.location || 'Location Name'}</Location>
                    <Title>{location.state?.card?.title || 'Product Title'}</Title>
                    <DateContainer>
                        <img src="/src/assets/img/IconDate.png" alt="Error"></img>
                        {format(startDate, 'yyyy년 MM월 dd일')}
                        <DateButton onClick={() => setShowStartPicker(true)}>날짜 선택</DateButton>
                        {showStartPicker && (
                            <DatePickerWrapper>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                        setShowStartPicker(false);
                                    }}
                                    onClickOutside={() => setShowStartPicker(false)}
                                    inline
                                />
                            </DatePickerWrapper>
                        )}
                    </DateContainer>
                    <DateContainer>
                        <img src="/src/assets/img/IconDate.png" alt="Error"></img>
                        {format(endDate, 'yyyy년 MM월 dd일')}
                        <DateButton onClick={() => setShowEndPicker(true)}>날짜 선택</DateButton>
                        {showEndPicker && (
                            <DatePickerWrapper>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => {
                                        setEndDate(date);
                                        setShowEndPicker(false);
                                    }}
                                    onClickOutside={() => setShowEndPicker(false)}
                                    inline
                                />
                            </DatePickerWrapper>
                        )}
                    </DateContainer>
                    <PeopleContainer>
                    <img src="/src/assets/img/IconPerson.png" alt="Error"></img>
                        {people}
                        <CounterBox>
                            <CounterButton onClick={handleDecreasePeople}>-</CounterButton>
                            <CounterButton onClick={handleIncreasePeople}>+</CounterButton>
                        </CounterBox>
                    </PeopleContainer>
                    <Total>
                        <p>총 금액</p>
                        <p>Total Price</p>
                    </Total>
                    <Icons>
                        <img src="/src/assets/img/CartIcon.png" alt="Error" />
                        <button id="purchase" onClick={handlePurchase}>구매하기</button> 
                    </Icons>
                </Detail>
            </TopBox>
            <BottomBox>
                <TextBox>
                    <p className="Header">정보</p>
                    <div className="Description">Product information</div>
                </TextBox>
                <TextBox>
                    <p className="Header">주소</p>
                    <div className="Description">Product address</div>
                </TextBox>
            </BottomBox>
        </Container>
    );
};

export default DetailPage;
