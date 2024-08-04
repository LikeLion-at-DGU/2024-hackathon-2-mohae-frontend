import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { useLocation } from "react-router-dom"; 
import { API } from '../../api'; // API 경로를 적절히 수정

// 스타일 컴포넌트는 이전과 동일

const DetailPage = () => {
    const location = useLocation(); 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);
    const [people, setPeople] = useState(1);
    const [activities, setActivities] = useState([]); // 이 상태는 사용하지 않으므로 제거해도 됩니다

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

    const handlePurchase = async () => {
        const data = {
            title: location.state?.card?.title || 'Default Title',
            description: 'Some description', // 필요에 따라 수정
            date: startDate.toISOString(), // ISO 형식의 날짜로 변환
            family: people,
            price: 100, // 실제 가격 데이터를 사용하도록 수정
            available_slots: 10, // 실제 가용 슬롯 데이터를 사용하도록 수정
            category: 1, // 실제 카테고리 데이터를 사용하도록 수정
            subcategory: 1 // 실제 서브카테고리 데이터를 사용하도록 수정 (필요 시)
        };

        try {
            const response = await API.post('/culture/activities', data);
            console.log('Purchase successful:', response.data);
        } catch (error) {
            console.error('Error during purchase:', error);
        }
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
