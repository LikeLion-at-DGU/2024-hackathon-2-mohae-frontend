import React, { useState, useEffect } from "react";
import styled from "styled-components";
import good from "../../assets/binstar.png";
import realheart from "../../assets/star.png";
import PhotoDetail from "./PhotoDetail";
import ReactModal from "react-modal";
import { API } from "../../api";
import { format, isValid } from "date-fns"; // date-fns를 사용하여 날짜를 포맷팅합니다.

const Frame = styled.div`
  display: flex;
  width: 247px;
  height: 350px;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: #fff;
  box-shadow: 1px 3px 11.2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05) translateY(-5px);
  }
`;

const ImgFrame = styled.img`
  width: 100%;
  height: 240px;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  transition: border 0.3s ease;
  cursor: pointer;
`;

const UnderImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const When = styled.p`
  color: #9f9f9f;
  font-family: "NanumSquare Neo";
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.09px;
  text-align: right;
`;

const Under = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 10px; */
  position: absolute;
  bottom: 5px;
  width: 100%;
`;

const Radius = styled.img`
  width: 39px;
  height: 39px;
  padding: 5px;
  background: #d9d9d9;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
`;

const Who = styled.p`
  color: #000;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.16px;
  margin-bottom: 2px;
`;

const DetailText = styled.p`
  color: #2d539e;
  font-family: NanumSquareRound;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.11px;
  margin-top: -2px;
  text-align: center;
`;

const WhoandDetailText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const GalleryFrame = ({
  image,
  photoId,
  onLikeToggle,
  isLiked,
  title,
  detail,
  timestamp,
  photoData = {}, // 기본값 설정
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [liked, setLiked] = useState(isLiked);
  const [favoriteId, setFavoriteId] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await API.get(`/gallery/favorites`);
        const favorite = response.data.find((fav) => fav.photo === photoId);
        if (favorite) {
          setLiked(true);
          setFavoriteId(favorite.id);
        } else {
          setLiked(false);
          setFavoriteId(null);
        }
      } catch (error) {
        console.error(
          "Failed to fetch like status:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchLikeStatus();
  }, [photoId]);

  const openModal = async () => {
    try {
      const response = await API.get(`/gallery/photos/${photoId}`);
      setModalData(response.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Failed to fetch photo details:", error);
    }
  };

  const closeModal = () => setModalIsOpen(false);

  const handleLikeClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (liked && favoriteId) {
        await API.delete(`/gallery/favorites/${favoriteId}`);
        setLiked(false);
        setFavoriteId(null);
      } else {
        const response = await API.post(`/gallery/favorites`, {
          user: "currentUserId", // 실제 사용자 ID로 변경
          photo: photoId,
        });
        setLiked(true);
        setFavoriteId(response.data.id); // 새로운 favoriteId 설정
      }
    } catch (error) {
      console.error(
        "Failed to update favorites:",
        error.response ? error.response.data : error.message
      );
      alert("좋아요 상태 업데이트에 실패했습니다. 다시 시도해 주세요."); // 사용자에게 피드백 제공
    }
  };

  // timestamp를 Date 객체로 변환하고 포맷팅합니다
  const formattedDate = isValid(new Date(timestamp))
    ? format(new Date(timestamp), "yyyy-MM-dd")
    : "Invalid date";

  // photoData를 콘솔에 출력합니다.
  console.log("photoData:", photoData);

  // profile_picture URL이 유효한지 확인합니다.
  const profilePicture = photoData?.profile?.profile_picture;
  console.log("profilePicture:", profilePicture);

  return (
    <>
      <Frame onClick={openModal}>
        <ImgFrame src={image} />
        <StyledImageWrapper>
          <StyledImage
            src={liked ? realheart : good}
            alt="좋아요 이미지"
            onClick={handleLikeClick}
          />
        </StyledImageWrapper>
        <UnderImg>
          <When>{formattedDate}</When>
        </UnderImg>
        <Under>
          {profilePicture ? (
            <Radius
              src={profilePicture}
              alt="profile_picture"
              onError={(e) => (e.target.style.display = "none")}
            />
          ) : (
            <Radius src={good} alt="default_profile_picture" />
          )}
          <WhoandDetailText>
            <Who>{title}</Who>
            <DetailText>{detail}</DetailText>
          </WhoandDetailText>
        </Under>
      </Frame>
      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            padding: 0,
            border: "none",
            background: "none",
            overflow: "visible",
            position: "unset",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {modalData ? (
          <PhotoDetail photoData={modalData} closeModal={closeModal} />
        ) : (
          <div>Loading...</div>
        )}
      </ReactModal>
    </>
  );
};

export default GalleryFrame;
