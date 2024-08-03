import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate import
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

const tabs = [
    { label: "국내", key: "Local" },
    { label: "해외", key: "Abroad" },
    { label: "호캉스", key: "Hotel" },
];



const Travel = () => {
    const [activeTab, setActiveTab] = useState("Local");
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);
    const [activities, setActivities] = useState([]);
    const handleCardClick = (card) => {
        // DetailPage로 card의 정보를 state로 전달하며 이동
        navigate("/CulturePage/Detail", { state: { card } });
    };
    
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
            {activities.map((activity, index) => (
                <CardLink key={index} onClick={() => handleCardClick(card)}>
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
    </Container>
    );
};

export default Travel;
