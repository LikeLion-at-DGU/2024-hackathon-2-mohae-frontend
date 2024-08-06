import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from '../../api';  // API 모듈 가져오기

const Container = styled.div`
    padding: 20px;
    width: 1030px;
    @media (max-width: 360px) {
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
    justify-content: flex-start;
    align-items: center;
    gap: 1px;
    @media (max-width: 360px) {
        width: 328px;
        display: flex;
        flex-direction: row;  
        justify-content: flex-start;  
        align-items: center;
        padding-left: 7px;
    }
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
    font-family: NanumSquareRound;
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    @media (max-width: 360px) {
        width: 82px;
        height: 28px;
        font-size: 12px;
        border-radius: 8px 8px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
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
    background-color: #FFFFFF;
    align-items: center;
    gap: 45px;
    padding-bottom: 30px;
    margin: 0 auto; 
    justify-content: center; 
    @media (max-width: 360px) {
        width: 328px;
        grid-template-columns: 1fr;
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
    position: relative; /* Position the card to use relative positioning for the button */
    @media (max-width: 360px) {
        width: 300px;
        height: 120px;
        padding: 2px;
        box-shadow: none;
        border-radius: 10px;
        gap:10px;
        padding: 10px;
    }
`;

const Image = styled.img`
    width: 432px;
    height: 256px;
    background-color: #FFFFFF;
    border-radius: 20px;
    @media (max-width: 360px) {
        width: 160px;
        height: 90px;
        border-radius: 10px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px; /* Add gap between child elements */
    padding: 5px;
    width: 415px;
    height: 135px;
    overflow: hidden;
    @media (max-width: 360px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 122px;
    }
`;

const Location = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 6px 6px;
    font-family: NanumSquareRound;
    font-size: 19px;
    color: #2D539E80;
    background-color: #EBF1FF;
    border-radius: 10px;
    @media (max-width: 360px) {
        font-size: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        width: fit-content;
        height: 12px;
    }
`;

const Title = styled.div`
    font-family: NanumSquareRound;
    font-size: 30px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    @media (max-width: 360px) {
        font-size: 11px;
    }
`;

const Distance = styled.div`
    font-family: NanumSquareRound;
    font-size: 24px;
    color: #2D539E;
    font-weight: regular;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    @media (max-width: 360px) {
        font-size: 9px;
    }
`;

const HeartButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: transparent; /* 배경색 제거 */
    border: none; /* 테두리 제거 */
    outline: none;

    img {
        width: 24px;
        height: 24px;
        border: none; /* 이미지 테두리 제거 */
    }
    @media (max-width: 360px) {
        top: 3px;
        right: 3px;
        img{
            width: 8px;
            height: 8px;
        }
    }
`;

const tabs = [
    { label: "생활", key: "Life" },
    { label: "취미", key: "Hobby" },
    { label: "요리", key: "Cook" },
];

const Education = () => {
    const [activeTab, setActiveTab] = useState("Life");
    const [activities, setActivities] = useState([]);
    const [likedItems, setLikedItems] = useState({}); // 상태로 좋아요 상태 관리

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get('/culture/activities');
                const filteredActivities = response.data.filter(activity => 
                    activity.category && activity.category.name === '배울거리'
                );

                // 서버로부터 기존에 좋아요 표시된 아이템 가져오기 (예시)
                const likedResponse = await API.get('/culture/likes');
                const likedItemsFromServer = likedResponse.data.reduce((acc, likedItem) => {
                    acc[likedItem.activity] = true;
                    return acc;
                }, {});

                setActivities(filteredActivities);
                setLikedItems(likedItemsFromServer);
            } catch (error) {
                console.log('fetch data error:', error);
            }
        };
        fetchData();
    }, []);

    const handleLikeToggle = async (activityId, activity) => {
        const postData = {
            activity: activity.id,
            category_id: activity.category?.id,
            subcategory_id: activity.subcategory?.id
        };

        console.log(`Toggling like for activity ID: ${activityId}`);
        console.log('Current likedItems state:', likedItems);
        console.log(`Is activity liked? ${likedItems[activityId]}`);

        try {
            if (likedItems[activityId]) {
                // POST 요청을 사용하여 삭제 작업을 시도
                console.log(`Sending POST request for deleting like for activity ID: ${activity.id}`);
                const response = await API.post(`/culture/likes/remove_like`, postData);

                if (response.status === 200 || response.status === 204) {
                    console.log('Successfully deleted like:', response.data);
                    setLikedItems(prevState => ({
                        ...prevState,
                        [activityId]: false
                    }));
                } else {
                    console.error('Failed to delete like:', response);
                }
            } else {
                // 좋아요가 안 되어 있다면 추가 요청을 보냄
                console.log('Sending POST request with data:', postData);
                const response = await API.post(`/culture/likes`, postData);

                if (response.status === 200 || response.status === 201) {
                    console.log('Successfully added like:', response.data);
                    setLikedItems(prevState => ({
                        ...prevState,
                        [activityId]: true
                    }));
                } else {
                    console.error('Failed to add like:', response);
                }
            }

            console.log('Updated likedItems state:', likedItems);
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };

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
                        <CardLink href={activity.hyperlink} target="_blank" key={index}>
                            <Card>
                                <Image src={activity.thumbnail} alt="card image" />
                                <TextContainer>
                                    <Location>{activity.location || "Unknown location"}</Location>
                                    <Title>{activity.title || "Blank_title"}</Title>
                                    <Distance>{activity.distance || "Unknown distance"}</Distance>
                                </TextContainer>
                                <HeartButton liked={likedItems[activity.id]} onClick={(e) => { 
                                    e.preventDefault(); // 링크 클릭 방지
                                    handleLikeToggle(activity.id, activity); // 좋아요 토글 처리
                                }}>
                                    <img src={likedItems[activity.id] ? "/src/assets/img/IconHeart_fill.png" : "/src/assets/img/IconHeart_blank.png"} alt="heart icon" />
                                </HeartButton>
                            </Card>
                        </CardLink>
                    ))}
                </CardContainer>
        </Container>
    );
};

export default Education;
