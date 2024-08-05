import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinkToLogin from "../components/Intro/LinkToLogin";
import IntroPage2 from "../components/Intro/IntroPage2";
import IntroFunction1 from "../components/Intro/IntroFunction1";
import IntroFunction2 from "../components/Intro/IntroFunction2";
import IntroTeam from "../components/Intro/IntroTeam";

const FrameWrapper = styled.div`
    margin: 30px auto;
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: 100vh;
    overflow: visible; /* 슬라이드가 넘치더라도 숨기지 않음 */
`;

const SliderWrapper = styled.div`
    height: 100%; /* 부모 요소의 높이를 화면 높이에 맞춤 */
    overflow: visible; /* 슬라이드가 넘치더라도 숨기지 않음 */
    .slick-list {
        height: 100vh;
    }

    .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* 각 슬라이드의 높이를 100%로 설정 */
    }

    .slick-slide > div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const CustomArrow = styled.div`
    position: absolute;
    z-index: 2;
    cursor: pointer;

    img {
        width: 35px;
        height: 35px;
    }
`;

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <CustomArrow onClick={onClick} style={{ bottom: '-15px', left: '50%', transform: 'translateX(-50%)' }}>
            <img src="/src/assets/img/ArrowButton_down.png" alt="down" />
        </CustomArrow>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <CustomArrow onClick={onClick} style={{ top: '-15px', left: '50%', transform: 'translateX(-50%)' }}>
            <img src="/src/assets/img/ArrowButton_up.png" alt="up" />
        </CustomArrow>
    );
};

const Intro = () => {
    const settings = {
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        adaptiveHeight: true,
        vertical: true, // 슬라이드를 세로로 이동하게 설정
        verticalSwiping: true, // 세로 스와이프 활성화
        centerMode: false, // 중앙에만 슬라이드를 보이도록 설정
    };

    return (
        <FrameWrapper>
            <SliderWrapper>
                <Slider {...settings}>
                    <div>
                        <LinkToLogin />
                    </div>
                    <div>
                        <IntroPage2 />
                    </div>
                    <div>
                        <IntroFunction1 />
                    </div>
                    <div>
                        <IntroFunction2 />
                    </div>
                    <div>
                        <IntroTeam />
                    </div>
                </Slider>
            </SliderWrapper>
        </FrameWrapper>
    );
};

export default Intro;
