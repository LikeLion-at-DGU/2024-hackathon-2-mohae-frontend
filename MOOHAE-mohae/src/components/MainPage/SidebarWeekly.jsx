import React from "react";
import styled from "styled-components";

const TodoList = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 14px;
background-color: #F7F8FB;
border-radius: 10px;
width: 280px;
height: fit-content;
`;
const TopSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const Title = styled.div`
font-size: 23px;
color: black;
font-weight: 600;
`;

const TodoNum = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #ffffff;
border: 1px solid #2d539e;
border-radius: 50%;
color: #2d539e;
width: 24px;
height: 20px;
font-size: 12px;
font-weight: 600;
`;

const ContentBlock = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 100%;
`;

const ContentCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 285px;
    height: 60px;
    gap: 12px;
    
`;

const ContentTime = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0px;
    padding-top: 10px;
    padding-left: 10px;;
`;

const ContentDate = styled.div`
    font-size: 12px;
    color: black;
`;

const ContentDay = styled.div`
    font-size: 12px;
    #Sun{
        display: flex;
    justify-content: center;
    align-items: center;
        width: 40px;
        height: 18px;
        border-radius: 20px;
        background-color: #4081FF;
        color: #FFFFFF;
    }
    #Sat{
        display: flex;
    justify-content: center;
    align-items: center;
        width: 40px;
        height: 18px;
        border-radius: 20px;
        background-color: #FF6F6F;
        color: #FFFFFF;
    }
    #Weekday{
        display: flex;
    justify-content: center;
    align-items: center;
        width: 40px;
        height: 18px;
        border-radius: 20px;
        background-color: #2D539E;
        color: #FFFFFF;
    }
`;

const ContentTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 12px;
`;

const ContentName = styled.div`
font-size: 14px;
font-weight: 600;
`;


const Participant = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: -5px;
`;

const ImgProfile = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
border: 2px solid white;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`;

const SidebarWeekly = () => {
return (
    <TodoList>
        <TopSection>
            <Title>이번주 모해?</Title>
            <TodoNum>N</TodoNum>
        </TopSection>
        <ContentBlock>
            <ContentCard>
                <ContentTime>   
                    <ContentDate>A월/B일</ContentDate>
                    <ContentDay><p id="Sun">Sun</p></ContentDay>
                </ContentTime>
                <ContentTitle>
                    <ContentName>끝내주게 밥먹기</ContentName>
                    <Participant>
                    <ImgProfile src="/src/assets/img/Profile_1.jpeg" alt="profile 1" />
                    <ImgProfile src="/src/assets/img/profile_2.jpg" alt="profile 2" />
                    </Participant>
                </ContentTitle>
                
            </ContentCard>
            <ContentCard>
                <ContentTime>   
                    <ContentDate>A월/B일</ContentDate>
                    <ContentDay><p id="Weekday">Mon</p></ContentDay>
                </ContentTime>
                <ContentTitle>
                    <ContentName>끝내주게 밥먹기</ContentName>
                    <Participant>
                    <ImgProfile src="/src/assets/img/Profile_1.jpeg" alt="profile 1" />
                    </Participant>
                </ContentTitle>
                
            </ContentCard>
            <ContentCard>
                <ContentTime>   
                    <ContentDate>A월/B일</ContentDate>
                    <ContentDay><p id="Weekday">Tue</p></ContentDay>
                </ContentTime>
                <ContentTitle>
                    <ContentName>끝내주게 밥먹기</ContentName>
                    <Participant>
                    <ImgProfile src="/src/assets/img/Profile_1.jpeg" alt="profile 1" />
                    <ImgProfile src="/src/assets/img/profile_2.jpg" alt="profile 2" />
                    </Participant>
                </ContentTitle>
                
            </ContentCard>
            <ContentCard>
                <ContentTime>   
                    <ContentDate>A월/B일</ContentDate>
                    <ContentDay><p id="Weekday">Wed</p></ContentDay>
                </ContentTime>
                <ContentTitle>
                    <ContentName>끝내주게 밥먹기</ContentName>
                    <Participant>
                    <ImgProfile src="/src/assets/img/Profile_1.jpeg" alt="profile 1" />
                    <ImgProfile src="/src/assets/img/profile_2.jpg" alt="profile 2" />
                    </Participant>
                </ContentTitle>
                
            </ContentCard>
            <ContentCard>
                <ContentTime>   
                    <ContentDate>A월/B일</ContentDate>
                    <ContentDay><p id="Weekday">Thu</p></ContentDay>
                </ContentTime>
                <ContentTitle>
                    <ContentName>끝내주게 밥먹기</ContentName>
                    <Participant>
                    <ImgProfile src="/src/assets/img/Profile_1.jpeg" alt="profile 1" />
                    <ImgProfile src="/src/assets/img/profile_2.jpg" alt="profile 2" />
                    </Participant>
                </ContentTitle>
                
            </ContentCard>
            <ContentCard>
                <ContentTime>   
                    <ContentDate>A월/B일</ContentDate>
                    <ContentDay><p id="Weekday">Fri</p></ContentDay>
                </ContentTime>
                <ContentTitle>
                    <ContentName>끝내주게 밥먹기</ContentName>
                    <Participant>
                    <ImgProfile src="/src/assets/img/Profile_1.jpeg" alt="profile 1" />
                    <ImgProfile src="/src/assets/img/profile_2.jpg" alt="profile 2" />
                    </Participant>
                </ContentTitle>
                
            </ContentCard>
            <ContentCard>
                <ContentTime>   
                    <ContentDate>A월/B일</ContentDate>
                    <ContentDay><p id="Sat">Sat</p></ContentDay>
                </ContentTime>
                <ContentTitle>
                    <ContentName>끝내주게 밥먹기</ContentName>
                    <Participant>
                    <ImgProfile src="/src/assets/img/Profile_1.jpeg" alt="profile 1" />
                    <ImgProfile src="/src/assets/img/profile_2.jpg" alt="profile 2" />
                    </Participant>
                </ContentTitle>
                
            </ContentCard>
            
        </ContentBlock>
    </TodoList>
);
};

export default SidebarWeekly;