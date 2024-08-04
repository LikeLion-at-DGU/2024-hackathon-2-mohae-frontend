import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from '../../api';  // API 모듈 가져오기

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

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 28px;
    background-color: #FFFFFF;
    border-radius: 0px 30px 30px 30px;
    box-shadow: 1px 2px 12px 0px #00000040;
`;

const CardContainer = styled.div`
    width: 100%;  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    padding-bottom: 30px;
    margin: 0 auto; 
    justify-content: center; 
`;

const CardLink = styled.a`
    text-decoration: none;
    color: inherit;
`;

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 15px;
    width: 937px;
    height: 300px;
    background-color: #f5f5f5;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0.5px 1px 9px 0px #00000026;
    gap: 15px;
`;

const Image = styled.img`
    width: 432px;
    height: 256px;
    background-color: #FFFFFF;
    border-radius: 20px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px; /* Add gap between child elements */
    padding: 5px;
    width: 415px;
    height: 135px;
    overflow: hidden;
`;

const Location = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 6px 6px;
    font-size: 19px;
    color: #2D539E80;
    background-color: #EBF1FF;
    border-radius: 10px;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
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
    { label: "생활", key: "Life" },
    { label: "취미", key: "Hobby" },
    { label: "요리", key: "Cook" },
];

const Education = () => {
    const [activeTab, setActiveTab] = useState("Life");
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get('/culture/activities');
                const filteredActivities = response.data.filter(activity => 
                    activity.category && activity.category.name === '배울거리'
                );
                setActivities(filteredActivities);
            } catch (error) {
                console.log('fetch data error:', error);
            }
        };
        fetchData();
    }, []);

    const filteredActivitiesByTab = activities.filter(activity => 
        activity.subcategory && activity.subcategory.name === activeTab
    );

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
            <Box>
                <CardContainer>
                    {filteredActivitiesByTab.map((activity, index) => (
                        <CardLink href={activity.hyperlink} target="_blank" key={index}>
                            <Card>
                                <Image src={activity.thumbnail} alt="card image" />
                                <TextContainer>
                                    <Location>{activity.location || "Unknown location"}</Location>
                                    <Title>{activity.title || "Blank_title"}</Title>
                                    <Distance>{activity.distance || "Unknown distance"}</Distance>
                                </TextContainer>
                            </Card>
                        </CardLink>
                    ))}
                </CardContainer>
            </Box>
        </Container>
    );
};

export default Education;
