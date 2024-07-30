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
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    `;

    const ContentTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `;

    const ContentName = styled.div`
    font-size: 18px;
    font-weight: 600;
    `;

    const IconDetail = styled.img`
    width: 20px;
    height: 20px;
    `;

    const ContentDescription = styled.div`
    font-size: 14px;
    `;

    const Participant = styled.div`
    display: flex;
    flex-direction: row;
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

    const SidebarDaily = () => {
    return (
        <TodoList>
            <TopSection>
                <Title>어제 모해?</Title>
                <TodoNum>N</TodoNum>
            </TopSection>
            <ContentBlock>
                <ContentCard>
                    <ContentTitle>
                        <ContentName>끝내주게 밥먹기</ContentName>
                        <IconDetail src="/src/assets/img/TriButton.png" alt="detail icon" />
                    </ContentTitle>
                    <ContentDescription>하루에 4끼를 조져?!</ContentDescription>
                    <Participant>
                        <ImgProfile src="/src/assets/img/Profile_1.jpeg" alt="profile 1" />
                        <ImgProfile src="/src/assets/img/profile_2.jpg" alt="profile 2" />
                    </Participant>
                </ContentCard>
                <ContentCard>
                    <ContentTitle>
                        <ContentName>친구랑 저녁</ContentName>
                        <IconDetail src="/src/assets/img/TriButton.png" alt="detail icon" />
                    </ContentTitle>
                    <ContentDescription>9시에 집들어가요</ContentDescription>
                    <Participant>
                        <ImgProfile src="/src/assets/img/Profile_1.jpeg" alt="profile 3" />
                    </Participant>
                </ContentCard>
            </ContentBlock>
        </TodoList>
    );
    };

    export default SidebarDaily;