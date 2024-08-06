import React from "react";
import { styled } from "styled-components";

const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    text-align: center;

    .Description1{
        font-size: 20px;
        font-weight: 400;
    }
    .Title{
        font-size: 36px;
        font-weight: 600;
    }
    .contentBox1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }

    @media (max-width: 360px) {
        gap: 15px;
        .Description1{
            font-size: 10px;
            font-weight: 400;
        }
        .Title{
            font-size: 18px;
            font-weight: 600;
        }
        .contentBox1{
            gap: 3px;
        }
        .img_rocket{
            width: 180px;
        }
    }   
`;

const FunctionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (max-width: 360px) {
        width: 100%;
        gap: 6px;
        align-items: center; /* 중앙 정렬을 위해 align-items 사용 */
        img{
            width: 360px;

        }
    }   
`;

const HighlightedText = styled.span`
    color: #2D539E;
`;

const AboutMohae = () => {
    return (
        <>
            <DivWrapper>
                <div className="Description1">가족서비스 플렛폼 1위</div>
                <div className="Title">
                    가족문화 <HighlightedText>새로운 도약을 시작</HighlightedText>합니다.
                </div>
                <div className="contentBox1">
                    <div className="Description1">가족 커뮤니티 플렛폼 NO.1 모해(MOHAE)가 부모와 자녀가 함께 행복해지고</div>
                    <div className="Description1">일상을 더 특별하게 만드는 가족 문화로 혁신을 이끌어냅니다.</div>
                </div>   
                <img className="img_rocket" src="/src/assets/img/NewRocket.png" alt="Rocket" />
                <div className="Description1">내 일정, 건강, 사진, 문화생활부터 모든 가족 구성원까지</div>
                <div className="Title">
                    일상에 스며드는 <HighlightedText>가족 친화 플랫폼을 제공</HighlightedText>합니다.
                </div>
                <div className="Description1">부모님의 정신적·신체적 wellness를 위한 모해의 4가지 기능</div>
                <FunctionWrapper>
                    <img className="Function" src="/src/assets/img/HomePage_Func1.png" alt="Function 1" />
                    <img className="Function" src="/src/assets/img/HomePage_Func2.png" alt="Function 2" />
                    <img className="Function" src="/src/assets/img/HomePage_Func3.png" alt="Function 3" />
                    <img className="Function" src="/src/assets/img/HomePage_Func4.png" alt="Function 4" />
                    <img className="Function" src="/src/assets/img/HomePage_SubFunc.png" alt="Sub Function" />
                </FunctionWrapper>
            </DivWrapper>
        </>
    );
}

export default AboutMohae;
