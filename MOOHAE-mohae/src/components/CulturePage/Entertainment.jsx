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
    font-size: 16px;
    color: #2D539E;
    font-weight: regular;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%; /* 혹은 원하는 너비로 설정 */
`;


const tabs = [
    { label: "영화", key: "Movie" },
    { label: "무대", key: "Show" },
    { label: "미술", key: "Art" },
];

const cardData = {
    Movie: [
        {
            link: "http://www.cgv.co.kr/movies/detail-view/?midx=883896",
            location: "현재 상영중",
            title: "슈퍼배드 4",
            distance: "감독 : 크리스 리노드 ,  패트릭 들라주 / 배우 : 스티브 카렐 ,  크리스틴 위그",
        },
        {
            link: "http://www.cgv.co.kr/movies/detail-view/?midx=88437",
            location: "현재 상영중",
            title: "파일럿",
            distance: "감독 : 김한결 / 프로듀서 : 염은하 / 배우 : 조정석 ,  이주명",
        },
        {
            link: "http://www.cgv.co.kr/movies/detail-view/?midx=87864",
            location: "현재 상영중",
            title: "인사이드 아웃2",
            distance: "감독 : 켈시 만 / 배우 : 에이미 포엘러 ,  마야 호크 ",
        },
    ],
    Show: [
        {
            link: "https://tickets.interpark.com/goods/24006741#",
            location: "뮤지컬",
            title: "〈어쩌면 해피엔딩〉 2024",
            distance: "예스24스테이지 1관",
        },
        {
            link: "https://tickets.interpark.com/goods/24006741#",
            location: "뮤지컬",
            title: "〈어쩌면 해피엔딩〉 2024",
            distance: "예스24스테이지 1관",
        },{
            link: "https://tickets.interpark.com/goods/24006741#",
            location: "뮤지컬",
            title: "〈어쩌면 해피엔딩〉 2024",
            distance: "예스24스테이지 1관",
        },{
            link: "https://tickets.interpark.com/goods/24006741#",
            location: "뮤지컬",
            title: "〈어쩌면 해피엔딩〉 2024",
            distance: "예스24스테이지 1관",
        },{
            link: "https://tickets.interpark.com/goods/24006741#",
            location: "뮤지컬",
            title: "〈어쩌면 해피엔딩〉 2024",
            distance: "예스24스테이지 1관",
        },{
            link: "https://tickets.interpark.com/goods/24006741#",
            location: "뮤지컬",
            title: "〈어쩌면 해피엔딩〉 2024",
            distance: "예스24스테이지 1관",
        },{
            link: "https://tickets.interpark.com/goods/24006741#",
            location: "뮤지컬",
            title: "〈어쩌면 해피엔딩〉 2024",
            distance: "예스24스테이지 1관",
        },{
            link: "https://tickets.interpark.com/goods/24006741#",
            location: "뮤지컬",
            title: "〈어쩌면 해피엔딩〉 2024",
            distance: "예스24스테이지 1관",
        },
    ],
    Art: [
        {
            link: "https://tickets.interpark.com/goods/24005553",
            location: "동대문디자인플라자 뮤지엄",
            title: "헬로키티 50주년 특별전",
            distance: "2024.04.13 ~2024.08.13",
        },{
            link: "https://tickets.interpark.com/goods/24005553",
            location: "동대문디자인플라자 뮤지엄",
            title: "헬로키티 50주년 특별전",
            distance: "2024.04.13 ~2024.08.13",
        },{
            link: "https://tickets.interpark.com/goods/24005553",
            location: "동대문디자인플라자 뮤지엄",
            title: "헬로키티 50주년 특별전",
            distance: "2024.04.13 ~2024.08.13",
        },{
            link: "https://tickets.interpark.com/goods/24005553",
            location: "동대문디자인플라자 뮤지엄",
            title: "헬로키티 50주년 특별전",
            distance: "2024.04.13 ~2024.08.13",
        },{
            link: "https://tickets.interpark.com/goods/24005553",
            location: "동대문디자인플라자 뮤지엄",
            title: "헬로키티 50주년 특별전",
            distance: "2024.04.13 ~2024.08.13",
        },{
            link: "https://tickets.interpark.com/goods/24005553",
            location: "동대문디자인플라자 뮤지엄",
            title: "헬로키티 50주년 특별전",
            distance: "2024.04.13 ~2024.08.13",
        },{
            link: "https://tickets.interpark.com/goods/24005553",
            location: "동대문디자인플라자 뮤지엄",
            title: "헬로키티 50주년 특별전",
            distance: "2024.04.13 ~2024.08.13",
        },
    ],
};

const Entertainment = () => {
    const [activeTab, setActiveTab] = useState("Movie");

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

export default Entertainment;
