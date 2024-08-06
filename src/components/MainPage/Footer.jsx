import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    background-color: #3b3e42;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    @media (max-width: 360px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 360px;
        height: fit-content;
    }
`;

const FooterWrapper = styled.div`
    width: 1020px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    text-align: left; /* 좌측 정렬을 적용 */

    @media (max-width: 360px) {
        align-items: flex-start; /* 좌측 정렬을 유지 */
        width: 360px;
        height: fit-content;
        gap: 3px;
    }
`;

const FooterTitle = styled.div`
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 5px;
    @media (max-width: 360px) {
        font-size: 14px;
        margin-bottom: 5px;
    }
`;

const FooterInfo = styled.div`
    font-size: 22px;
    font-weight: 500;
    color: #cccccc;
    font-family: "pretendard";
    @media (max-width: 360px) {
        font-size: 8px;
    }
`;

const FooterContent = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #cccccc;
    line-height: 35px;
    @media (max-width: 360px) {
        font-size: 8px;
    }
`;

const FooterCopyRights = styled.div`
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
    margin-top: 5px;
    @media (max-width: 360px) {
        font-size: 10px;
        margin-top: 3px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterTitle>Team 모해</FooterTitle>
                <FooterInfo>팀명 : 모해모해 큥! | 팀장 : 임수빈 @so_ob452</FooterInfo>
                <FooterContent>
                    PM&Design | 구도욱 @
                    <br />
                    Front-end | 강근우 @gn00py48 김연진 @why0_0jin 오태준 @taejun_0
                    <br />
                    Back-end | 임수빈 @so_ob452 조성현 @sain_tyn
                    <br />
                    서울특별시 중구 필동로 1길30 동국대학교 멋쟁이 사자처럼 @loveliong_12
                </FooterContent>
                <FooterCopyRights>ⓒ MOHAE Service. All Rights Reserved.</FooterCopyRights>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
