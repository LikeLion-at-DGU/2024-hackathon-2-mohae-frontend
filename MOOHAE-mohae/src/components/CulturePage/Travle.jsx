import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate import

const Container = styled.div`
    padding: 20px;
    width: 1030px;
`;

const TabMenu = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1px;
`;

const TabItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 206px;
    height: 60px;
    border-radius: 14px 14px 0px 0px;
    cursor: pointer;
    box-shadow: 0px 1px 10px -2px #00000040;
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    background-color: ${({ active }) => (active ? "#FFFFFF" : "#F8F9FE")};
`;

const CardContainer = styled.div`
    width: 1030px;  
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 45px;
    padding: 30px 50px;
    background-color: #FFFFFF;
    border-radius: 0px 30px 30px 30px;
    box-shadow: 1px 2px 12px 0px #00000040;
    margin: 0 auto; 
    justify-content: center; 
`;

const CardLink = styled.a`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 15px;
    width: 445px;
    height: 407px;
    background-color: #f5f5f5;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0.5px 1px 9px 0px #00000026;
    gap: 15px;
`;

const Image = styled.div`
    width: 415px;
    height: 238px;
    background-color: #FFFFFF;
    border-radius: 20px;
`;

const TextContainer = styled.div`
    padding: 5px;
    width: 415px;
    height: 135px;
    overflow: hidden;
`;

const Location = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 6px 15px;
    font-size: 19px;
    color: #2D539E80;
    background-color: #EBF1FF;
    border-radius: 10px;
    margin-bottom: 25px;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
`;

const Distance = styled.div`
    font-size: 23px;
    color: #2D539E;
    font-weight: regular;
`;

const tabs = [
    { label: "국내", key: "Local" },
    { label: "해외", key: "Abroad" },
    { label: "호캉스", key: "Hotel" },
];

const cardData = {
    Local: [
        {
            link: "https://korean.visitkorea.or.kr/detail/cs_detail_cos.do?cotid=ab55816c-23f1-4918-95b0-7af407c56bbc&big_category=C01&mid_category=C0115&big_area=6",
            location: "부산 해운대구",
            title: "해운대를 지나 문탠로드를 걷다",
            distance: "코스 총 거리 11.5km",
        },
        {
            link: "https://korean.visitkorea.or.kr/detail/cs_detail_cos.do?cotid=ab55816c-23f1-4918-95b0-7af407c56bbc&big_category=C01&mid_category=C0115&big_area=6",
            location: "부산 해운대구",
            title: "해파랑길(부산, 울산 구간)",
            distance: "코스 총 거리 76.1km",
        },
    ],
    Abroad: [
        {
            link: "https://travel.interpark.com/tour/goods?baseGoodsCd=A3018487",
            location: "유럽 스위스",
            title: "[베스트셀러/W트립] 스위스 9일, 전일정 4성호텔, 융프라우/마테호른/리기산/알레치빙하",
            distance: "7박9일",
        },
        {
            link: "https://travel.interpark.com/tour/goods?baseGoodsCd=A6016918",
            location: "오사카",
            title: "오사카3일,오사카/교토+1일자유 /시내호텔 2연박",
            distance: "2박3일",
        },
        {
            link: "https://travel.interpark.com/tour/goods?baseGoodsCd=A3018561",
            location: "스페인/포르투갈",
            title: "[W트립]스페인/포르투갈 9일, 아시아나항공, 전일정 4성급+3박 5성급 숙박",
            distance: "7박9일",
        },
        {
            link: "https://travel.interpark.com/tour/goods?baseGoodsCd=A1037244",
            location: "푸꾸옥",
            title: "[W트립] 푸꾸옥 5일, 숲속뷰 M빌리지 리조트, 성인1인당 유심칩 제공",
            distance: "3박5일",
        },
    ],
    
    Hotel: [
        {
            link: "https://www.yeogi.com/domestic-accommodations/69729?checkIn=2024-08-02&checkOut=2024-08-03&personal=2",
            location: "속초",
            title: "체스터톤스 호텔",
            distance: "강원 속초시 교동 1024-1",
        },
        {
            link: "https://www.yeogi.com/domestic-accommodations/7444?checkIn=2024-08-02&checkOut=2024-08-03&personal=2",
            location: "속초",
            title: "라마다 속초",
            distance: "강원 속초시 대포동 939",
        },
        {
            link: "https://www.yeogi.com/domestic-accommodations/6429?checkIn=2024-08-02&checkOut=2024-08-03&personal=2",
            location: "속초",
            title: "마레몬스 호텔",
            distance: "강원 속초시 대포동 245-5",
        },
        {
            link: "https://www.yeogi.com/domestic-accommodations/70213?checkIn=2024-08-02&checkOut=2024-08-03&personal=2",
            location: "속초",
            title: "어반스테이 속초등대해변",
            distance: "강원 속초시 영랑동 148-45",
        },
    ],
};

const Travel = () => {
    const [activeTab, setActiveTab] = useState("Local");
    const navigate = useNavigate();

    const handleCardClick = (card) => {
        // DetailPage로 card의 정보를 state로 전달하며 이동
        navigate("/CulturePage/Detail", { state: { card } });
    };

    return (
        <Container>
            <TabMenu>
                {tabs.map((tab) => (
                    <TabItem
                        key={tab.key}
                        active={activeTab === tab.key}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        {tab.label}
                    </TabItem>
                ))}
            </TabMenu>
            <CardContainer>
                {(cardData[activeTab] || []).map((card, index) => (
                    <CardLink key={index} onClick={() => handleCardClick(card)}>
                        <Card>
                            <Image alt="card image" />
                            <TextContainer>
                                <Location>{card.location}</Location>
                                <Title>{card.title}</Title>
                                <Distance>{card.distance}</Distance>
                            </TextContainer>
                        </Card>
                    </CardLink>
                ))}
            </CardContainer>
        </Container>
    );
};

export default Travel;
