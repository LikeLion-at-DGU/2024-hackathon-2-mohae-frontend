import React from "react";
import { styled } from "styled-components";

const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    .Description1{
        font-size:20px;
        font-weight: 40;

    }
    .Title{
        font-size: 36px;
        font-weight: 400;
    }
    .contentBox1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }
`;

const AboutMohae = () =>{
    
    return(
        <>
            <DivWrapper>
                <div className="Description1">가족서비스 플렛폼 1위</div>
                <div className="Title">가족문화 새로운 도약을 시작합니다.</div>
                <img className="img_rocket" src="/src/assets/img/Rocket.png"></img>
                <div className="contentBox1">
                    <div className="Description1">가족 커뮤니티 플렛폼 NO.1 모해(MOHAE)가 부모와 자녀가 함께 행복해지고</div>
                    <div className="Description1">일상을 더 특별하게 만드는 가족 문화로 혁신을 이끌어냅니다.</div>
                </div>                
            </DivWrapper>
        </>
    );
}

export default AboutMohae;