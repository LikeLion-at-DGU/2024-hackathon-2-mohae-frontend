import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { useLocation } from "react-router-dom"; 
import { API } from '../../api';
import DefaultThumbnail from "/src/assets/img/DefaultThumbnail.png";

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
    top: 60px;
    z-index: 1000;
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

const ReservationPopup = styled.div`
    width: 580px;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 20px;
    gap: 80px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    z-index: 1001;

    img {
        width: fit-content;
        height: fit-content;
    }
    .TextReservation {
        font-size: 35px;
        font-weight: bold;
    }
`;

const ErrorPopup  = styled.div`
    width: 580px;
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 20px;
    gap: 80px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    z-index: 1001;

    img {
        width: fit-content;
        height: fit-content;
    }
    .TextReservation {
        font-size: 35px;
        font-weight: bold;
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

const DetailPage = () => {
    const location = useLocation(); 
    const activity = location.state?.activity || {};
    const [userId, setUserId] = useState(null);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);
    const [people, setPeople] = useState(1);
    const [showPopup, setShowPopup] = useState(false); // 팝업을 제어하는 상태
    const [isError, setIsError] = useState(false); // 에러 팝업을 제어하는 상태

    useEffect(() => {
        window.scrollTo(0, 0); 
        FetchUserId(); 
    }, []);

    const handleIncreasePeople = () => {
        setPeople(people + 1);
    };

    const handleDecreasePeople = () => {
        if (people > 1) {
            setPeople(people - 1);
        }
    };

    const FetchUserId = async () => {
        try {
            const response = await API.get('/accounts/profile/');
            console.log("userId response", response.data);
            setUserId(response.data.user.id);
        } catch (error) {
            console.log('fetch user id error:', error);
        }
    };

    const handlePurchase = async () => {
        if (!userId) {
            console.error('User ID is not available');
            return;
        }

        if (activity.available_slots === 1) {
            console.error('No available slots for this activity.');
            setIsError(true);
            setShowPopup(true);
            return;
        }
    
        const formData = new FormData();
        formData.append('activity', activity.id);
        formData.append('user', userId);
        formData.append('people', people);
        formData.append('price', activity.price || "0");
    
        if (startDate) {
            formData.append('start_date', startDate.toISOString());
        }
        if (endDate) {
            formData.append('end_date', endDate.toISOString());
        }
        formData.append('status', 'P');
    
        // Thumbnail 처리
        if (activity.thumbnail && activity.thumbnail instanceof File) {
            formData.append('thumbnail', activity.thumbnail);
        } else {
            // DefaultThumbnail을 파일 객체로 변환하여 전송
            const response = await fetch(DefaultThumbnail);
            const blob = await response.blob();
            const file = new File([blob], "DefaultThumbnail.png", { type: "image/png" });
            formData.append('thumbnail', file);
        }
    
        // thumbnail이 잘 추가되었는지 콘솔에 출력
        console.log(formData.get('thumbnail'));
    
        try {
            const response = await API.post(`/culture/reservations`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Post successful: ", response.data);

            // 구매 완료 후 팝업을 표시
            setShowPopup(true);
        } catch (error) {
            console.error("Error posting data: ", error);
    
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            }
        }
    };

    return (
        <Container>
            <TopBox>
                <Thumbnail>
                    <img src={activity.thumbnail || "/src/assets/img/DefaultThumbnail.png"} alt="Thumbnail" />
                </Thumbnail>
                <Detail>
                    <Location>{activity.location || 'Location Name'}</Location>
                    <Title>{activity.title || 'Product Title'}</Title>
                    <DateContainer>
                        <img src="/src/assets/img/IconDate.png" alt="Error"></img>
                        {startDate ? format(startDate, 'yyyy년 MM월 dd일') : "날짜를 선택하세요"}
                        <DateButton onClick={() => setShowStartPicker(true)}>날짜 선택</DateButton>
                        {showStartPicker && (
                            <DatePickerWrapper>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {
                                        console.log("Selected start date:", date);
                                        setStartDate(date);
                                    }}
                                    onClickOutside={() => setShowStartPicker(false)}
                                    inline
                                />
                            </DatePickerWrapper>
                        )}
                    </DateContainer>
                    <DateContainer>
                        <img src="/src/assets/img/IconDate.png" alt="Error"></img>
                        {endDate ? format(endDate, 'yyyy년 MM월 dd일') : "날짜를 선택하세요"}
                        <DateButton onClick={() => setShowEndPicker(true)}>날짜 선택</DateButton>
                        {showEndPicker && (
                            <DatePickerWrapper>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => {
                                        console.log("Selected end date:", date);
                                        setEndDate(date);
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
                        <p>{activity.price ? `${activity.price} 원` : '00원'}</p>
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
                    <div className="Description">{activity.description || 'Product information'}</div>
                </TextBox>
                <TextBox>
                    <p className="Header">주소</p>
                    <div className="Description">{activity.address || 'Product address'}</div>
                </TextBox>
            </BottomBox>

            {showPopup && (
                <>
                    <Overlay onClick={() => setShowPopup(false)} />
                    {isError ? (
                        <ErrorPopup>
                            <img src="/src/assets/img/IconCheck.png" alt="Check icon" />
                            <div className="TextReservation">판매가 중단된 상품입니다.</div>
                        </ErrorPopup>
                    ) : (
                        <ReservationPopup>
                            <img src="/src/assets/img/IconCheck.png" alt="Check icon" />
                            <div className="TextReservation">예약이 완료되었습니다.</div>
                        </ReservationPopup>
                    )}
                </>
            )}
        </Container>
    );
};

export default DetailPage;
