import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { API } from '../../api';

const Container = styled.div`
    padding: 20px;
    width: 1030px;

    @media (max-width: 359px) {
        width: 360px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start; /* 중앙에서 좌측 정렬로 변경 */
        
    }
`;

const TabMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1px;

    @media (max-width: 359px) {
        width: 328px;
        display: flex;
        flex-direction: row;  
        justify-content: flex-start;  
        align-items: center;
        padding-left: 7px;
    }
`;

const TabItem = styled.div.attrs(props => ({
    'data-active': props.active.toString(),
}))`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 206px;
    height: 60px;
    border-radius: 14px 14px 0px 0px;
    cursor: pointer;
    box-shadow: 0px 1px 10px -2px #00000040;
    font-family: NanumSquareRound;
    font-weight: ${({ active }) => (active ? "800" : "700")};
    background-color: ${({ active }) => (active ? "#FFFFFF" : "#F8F9FE")};

    @media (max-width: 359px) {
        width: 82px;
        height: 28px;
        font-size: 12px;
        border-radius: 8px 8px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
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

    @media (max-width: 359px) {
        width: 328px;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        padding: 16px 9px;
        border-radius: 0px 14px 14px 14px;
        box-shadow: 1px 2px 6px 0px #00000040;
    }
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

    @media (max-width: 359px) {
        width: 147px;
        height: 197px;
        padding: 2px;
        box-shadow: none;
        border-radius: 10px;
        gap:4px;
        padding-top: 10px;
    }
`;

const Image = styled.img`
    width: 415px;
    height: 238px;
    background-color: #FFFFFF;
    border-radius: 20px;

    @media (max-width: 359px) {
        width: 132px;
        height: 69px;
        border-radius: 10px;
    }
`;

const TextContainer = styled.div`
    padding: 5px;
    width: 415px;
    overflow: hidden;

    @media (max-width: 359px) {
        width: 122px;
    }
`;

const Location = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 6px 15px;
    font-family: NanumSquareRound;
    font-size: 19px;
    color: #2D539E80;
    background-color: #EBF1FF;
    border-radius: 10px;
    margin-bottom: 15px;

    @media (max-width: 359px) {
        font-size: 11px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        width: 40px;
        height: 20px;
    }
`;

const Title = styled.div`
    font-family: NanumSquareRound;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;

    @media (max-width: 359px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    font-family: NanumSquareRound;
    font-size: 18px;
    margin-bottom: 10px;

    @media (max-width: 359px) {
        font-size: 10px;
    }
`;

const Date = styled.div`
    font-family: NanumSquareRound;
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;

    @media (max-width: 359px) {
        font-size: 10px;
    }
`;

const Price = styled.div`
    font-family: NanumSquareRound;
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;

    @media (max-width: 359px) {
        font-size: 10px;
    }
`;

const AvailableSlots = styled.div`
    font-family: NanumSquareRound;
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;

    @media (max-width: 359px) {
        font-size: 10px;
    }
`;

const Category = styled.div`
    font-family: NanumSquareRound;
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;

    @media (max-width: 359px) {
        font-size: 10px;
    }
`;

const Subcategory = styled.div`
    font-family: NanumSquareRound;
    font-size: 18px;
    color: #2D539E;
    margin-bottom: 10px;

    @media (max-width: 359px) {
        font-size: 10px;
    }
`;
const tabs = [
    { label: "국내", key: "Local" },
    { label: "해외", key: "Abroad" },
    { label: "호캉스", key: "Hotel" },
];

const Travel = () => {
    const [activeTab, setActiveTab] = useState("Local");
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);

    const handleCardClick = (activity) => {
        navigate("/CulturePage/DetailPage", { state: { activity } });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const activitiesResponse = await API.get('/culture/activities');
                console.log("Activity response", activitiesResponse.data);

                const filteredActivities = activitiesResponse.data.filter(activity => 
                    activity.category && activity.category.name === '추억거리'
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
            <CardContainer>
                {filteredActivitiesByTab.map((activity, index) => (
                    <CardLink key={index} onClick={() => handleCardClick(activity)}>
                        <Card>
                            <Image src={activity.thumbnail} alt="card image" />
                            <TextContainer>
                            <Location>{activity.subcategory ? `${activity.subcategory.name}` : "Blank_subcategory"}</Location>

                                <Title>{activity.title || "Blank_title"}</Title>
                                <Description>{activity.description || "Blank_description"}</Description>
                            </TextContainer>
                        </Card>
                    </CardLink>
                ))}
            </CardContainer>
        </Container>
    );
};

export default Travel;
