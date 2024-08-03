import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from '../../api';

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
    height: auto;
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
    margin-bottom: 15px;
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

const Description = styled.div`
    font-size: 18px;
    margin-bottom: 10px;
`;

const Date = styled.div`
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;
`;

const Price = styled.div`
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;
`;

const AvailableSlots = styled.div`
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;
`;

const Category = styled.div`
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;
`;

const Subcategory = styled.div`
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;
`;

const PostButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
`;

const tabs = [
    { label: "영화", key: "Movie" },
    { label: "무대", key: "Show" },
    { label: "미술", key: "Art" },
];

const Entertainment = () => {
    const [activeTab, setActiveTab] = useState("Movie");
    const [userId, setUserId] = useState(null);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get('/accounts/profile/');
                console.log("userId response", response.data);
                setUserId(response.data.user.id);

                if (response.data.user.id) {
                    const activitiesResponse = await API.get('/culture/activities');
                    console.log("Activity response", activitiesResponse.data);
                    setActivities(activitiesResponse.data);
                }
            } catch (error) {
                console.log('fetch data error:', error);
            }
        };
        fetchData();
    }, []);

    const handlePostActivity = async () => {
        const newActivity = {
            title: "젭알 올라가라 짱구야",
            description: "우ㅜ아 이뿐눈나다",
            hyperlink: "https://www.youtube.com/watch?v=1U2vTeZklbw",
        };

        try {
            
            const response = await API.post('/culture/activities', newActivity);
            console.log('POST 요청 성공:', response.data);
            const updatedActivitiesResponse = await API.get('/culture/activities');
            setActivities(updatedActivitiesResponse.data);
        } catch (error) {
            console.error('POST 요청 실패:', error.response ? error.response.data : error.message);
        }
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
                {activities
                    .filter(activity => activity.category === 3) // category가 3인 데이터만 필터링
                    .map((activity, index) => (
                        <CardLink href="#" target="_blank" key={index}>
                            <Card>
                                <Image src={activity.thumbnail} alt="card image" />
                                <TextContainer>
                                    <Title>{activity.title || "Blank_title"}</Title>
                                    <Description>{activity.description || "Blank_description"}</Description>
                                    <Date>{activity.date ? `날짜: ${new Date(activity.date).toLocaleDateString()}` : "Blank_date"}</Date>
                                    <Price>{activity.price !== undefined ? `가격: ${activity.price} 원` : "Blank_price"}</Price>
                                    <AvailableSlots>{activity.available_slots !== undefined ? `남은 자리: ${activity.available_slots}` : "Blank_slots"}</AvailableSlots>
                                    <Category>{activity.category !== undefined ? `카테고리 ID: ${activity.category}` : "Blank_category"}</Category>
                                    <Subcategory>{activity.subcategory !== undefined ? `하위 카테고리 ID: ${activity.subcategory}` : "Blank_subcategory"}</Subcategory>
                                </TextContainer>
                            </Card>
                        </CardLink>
                    ))}
            </CardContainer>
            <PostButton onClick={handlePostActivity}>새 활동 추가</PostButton>
        </Container>
    );
};

export default Entertainment;
