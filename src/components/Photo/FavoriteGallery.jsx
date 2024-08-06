import React, { useEffect, useState } from "react";
import GalleryFrame from "./GalleryFrame";
import { API } from "../../api";
import styled from "styled-components";

const Right = styled.div`
  /* margin-top: 30px; */
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 900px;
  /* margin-left: 100px; */
  min-width: 900px; /* 최소 너비를 설정하여 요소들이 줄어들지 않게 함 */
`;

const FavoriteGallery = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const fetchFavoriteItems = async () => {
      try {
        const response = await API.get("/gallery/favorites");
        const favoritePhotoIds = response.data.map((fav) => fav.photo);
        const photosResponse = await API.get("/gallery/photos");
        const favoritePhotos = photosResponse.data.filter((photo) =>
          favoritePhotoIds.includes(photo.id)
        );
        setFavoriteItems(favoritePhotos);
      } catch (error) {
        console.error("Failed to fetch favorite items:", error);
      }
    };

    fetchFavoriteItems();
  }, []);

  const handleLikeToggle = (photoId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== photoId)
    );
  };

  return (
    <Right>
      {favoriteItems.map((item) => (
        <GalleryFrame
          key={item.id}
          photoId={item.id}
          image={item.image}
          isLiked={true}
          title={item.title}
          detail={item.description}
          timestamp={item.created_at} // created_at 값을 전달
          onLikeToggle={handleLikeToggle}
        />
      ))}
    </Right>
  );
};

export default FavoriteGallery;
