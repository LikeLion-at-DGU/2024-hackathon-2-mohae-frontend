import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FrameWrapper = styled.div`
    width: 1140px;
    margin: 30px auto;
    position: relative;

    @media (max-width: 360px) {
        width: 320px;
        margin: 10px auto;
    }
`;

const ImgWrapper = styled.div`
    width: 800px;
    height: 262px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
    }

    @media (max-width: 360px) {
        width: 272px;
        height: 88px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 15px;
        }
    }
`;

const CustomArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    cursor: pointer;

    img {
        width: 35px;
        height: 35px;
    }

    @media (max-width: 360px) {
        img {
            width: 18px;
            height: 18px;
        }
    }
`;

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <CustomArrow onClick={onClick} className="next-arrow">
            <img src="/src/assets/img/ArrowButton_right.png" alt="right" />
        </CustomArrow>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <CustomArrow onClick={onClick} className="prev-arrow">
            <img src="/src/assets/img/ArrowButton_left.png" alt="left" />
        </CustomArrow>
    );
};

const SliderWrapper = styled.div`
    .slick-slide {
        padding: 0 40px; /* 슬라이드 양쪽에 40px 간격 추가 */
        box-sizing: border-box;
    }

    .slick-list {
        margin: 0 -40px; /* 전체 슬라이더의 좌우 여백 제거 */
    }

    @media (max-width: 360px) {
        .slick-slide {
            padding: 0 10px; /* 좁은 화면에서 슬라이드 간격 축소 */
        }

        .slick-list {
            margin: 0 -10px; /* 좁은 화면에서 슬라이더 좌우 여백 축소 */
        }

        .next-arrow {
            right: 70px;
            transform: translateY(-50%);
        }

        .prev-arrow {
            left: 70px;
            transform: translateY(-50%);
        }
    }

    @media (min-width: 361px) {
        .next-arrow {
            right: 95px;
            transform: translateX(100%) translateY(-50%);
        }

        .prev-arrow {
            left: 95px;
            transform: translateX(-100%) translateY(-50%);
        }
    }
`;

const ADBar = () => {
    const images = [
        { id: 1, src: '/src/assets/img/ADimg1.png', alt: 'AD1' },
        { id: 2, src: '/src/assets/img/ADimg2.png', alt: 'AD2' },
        { id: 3, src: '/src/assets/img/ADimg3.png', alt: 'AD3' },
        { id: 4, src: '/src/assets/img/ADimg4.png', alt: 'AD4' },
        { id: 5, src: '/src/assets/img/ADimg5.png', alt: 'AD5' },
    ];

    const settings = {
        centerMode: true,
        centerPadding: "80px",
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <FrameWrapper>
            <SliderWrapper>
                <Slider {...settings}>
                    {images.map((image) => (
                        <ImgWrapper key={image.id}>
                            <img src={image.src} alt={image.alt} />
                        </ImgWrapper>
                    ))}
                </Slider>
            </SliderWrapper>
        </FrameWrapper>
    );
};

export default ADBar;
