import React, { useState } from "react";
import styled from "styled-components";

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

const Image = styled.img`
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
    font-size: 16px;
    color: #2D539E;
    font-weight: regular;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%; 
`;


const tabs = [
    { label: "엑티비티", key: "Activity" },
    { label: "놀이공원.동물원", key: "Play" },
    { label: "문화체험", key: "Temapark" },
];

const cardData = {
    Activity: [
        {
            link: "https://busan.skylineluge.kr/",
            location: "부산",
            title: "스카이라인 루지 부산",
            distance: "55VF 88 Busan, South Korea",
        },
        {
            link: "https://leisure-web.yanolja.com/leisure/10126830",
            location: "서울 강남",
            title: "바운스 트램폴린 삼성센터/키즈카페",
            distance: "대한민국 서울특별시 강남구 영동대로 325",
        },
        {
            link: "https://leisure-web.yanolja.com/leisure/10035507",
            location: "강남 역삼",
            title: "클라임이모션 실내 클라이밍 체험/ 강습권",
            distance: "대한민국 서울특별시 강남구 역삼동 728-41",
        },
        {
            link: "https://leisure-web.yanolja.com/leisure/10104414",
            location: "[서울] (한강)",
            title: "카약패들보드윈드서핑",
            distance: "서울특별시 광진구 자양동 564",
        },
    ],
    Play: [
        {
            link: "https://leisure-web.yanolja.com/leisure/10128152",
            location: "부산",
            title: "김해 롯데워터파크 골드2시즌 이용권 ",
            distance: "경상남도 김해시 장유로 555",
        },
    ],
    Temapark: [
        {
            link: "https://www.museum.go.kr/site/main/home",
            location: "박물관",
            title: "국립중앙박물관",
            distance: "서울시 용산구 서빙고로 137",
        },
    ],
};

const Activity = () => {
    const [activeTab, setActiveTab] = useState("Activity");

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
                {cardData[activeTab].map((card, index) => (
                    <CardLink href={card.link} target="_blank" key={index}>
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

export default Activity;
