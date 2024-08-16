import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import { API } from '../../../api';

const LikeList = () => {
  const [selectedTab, setSelectedTab] = useState('buy');
  const [reservationsData, setReservationsData] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [activitiesData, setActivitiesData] = useState([]);

  const GetReservationsData = async () => {
    try {
      const response = await API.get("/users/mypage/confirmed_reservations");
      const reservations = response.data;

      const activityIds = reservations.map(reservation => reservation.reservation.activity);
      
      const activityPromises = activityIds.map(id => API.get(`/culture/activities/${id}`));
      const activitiesResponses = await Promise.all(activityPromises);
      const activitiesData = activitiesResponses.map(res => res.data);

      const updatedReservations = reservations.map(reservation => {
        const activityDetail = activitiesData.find(activity => activity.id === reservation.reservation.activity);
        return {
          ...reservation,
          reservation: {
            ...reservation.reservation,
            activityDetail: activityDetail,
          },
        };
      });

      setReservationsData(updatedReservations);
      console.log("Updated reservations with activity details:", updatedReservations);
    } catch (error) {
      console.error("Error fetching reservations or activity data:", error);
    }
  };

  useEffect(() => {
    GetReservationsData();

    const fetchLikedItems = async () => {
      try {
        const likedResponse = await API.get('/culture/likes');
        const likedItemsFromServer = likedResponse.data.reduce((acc, likedItem) => {
          acc[likedItem.activity] = likedItem;
          return acc;
        }, {});

        setLikedItems(likedItemsFromServer);
        console.log('Liked items data:', likedItemsFromServer);

        const activityIds = Object.values(likedItemsFromServer).map(item => item.activity);
        const activityPromises = activityIds.map(id => API.get(`/culture/activities/${id}`));
        const activitiesResponses = await Promise.all(activityPromises);
        const activitiesData = activitiesResponses.map(res => res.data);
        setActivitiesData(activitiesData);
        console.log('Activities data:', activitiesData);

      } catch (error) {
        console.log('Error fetching liked items or activities data:', error);
      }
    };

    fetchLikedItems();
  }, []);

  const handleShowBuy = () => setSelectedTab('buy');
  const handleShowLearn = () => setSelectedTab('learn');

  return (
    <>
      <S.LikeListHeaders>
        <S.LikeLikeHeader
          onClick={handleShowBuy}
          $isSelected={selectedTab === 'buy'}
        >예약 내역</S.LikeLikeHeader>
        <S.LikeLikeHeader
          onClick={handleShowLearn}
          $isSelected={selectedTab === 'learn'}
        >배울 거리 찜 내역</S.LikeLikeHeader>
      </S.LikeListHeaders>
      <S.LikeListContainer>
        {selectedTab === 'buy' && (
          <S.BuyList>
            {reservationsData.map((reservation, index) => (
              <S.BuyDetail key={index}>
                <S.BuyTime>{new Date(reservation.confirmed_at).toLocaleDateString()} 예약 완료</S.BuyTime>
                <S.Row>
                  <S.BuyImage
                    src={reservation.reservation.activityDetail?.thumbnail || 'default-thumbnail.png'}
                    alt={reservation.reservation.activityDetail?.title || 'No title available'}
                  />                  
                  <S.Column>
                    <S.BuyMoney>활동 이름 : {reservation.reservation.activityDetail?.title || 'No title available'}</S.BuyMoney>
                    <S.BuyTitle>예약자 : {reservation.reservation.user?.username || 'Unknown user'}</S.BuyTitle>
                  </S.Column>
                </S.Row>
              </S.BuyDetail>
            ))}
          </S.BuyList>
        )}
        {selectedTab === 'learn' && (
          <S.BuyList>  
            {activitiesData.map((activity, index) => (
              <S.BuyDetail key={index}>
                <S.BuyTime>{new Date(likedItems[activity.id]?.liked_at).toLocaleDateString()}</S.BuyTime>
                <S.Row>
                  {activity.thumbnail 
                    ? <S.BuyImage src={activity.thumbnail} alt={activity.title} />
                    : <div>No thumbnail available</div>
                  }
                  <S.Column>
                    <S.BuyMoney>{activity.title}</S.BuyMoney>
                    <S.BuySubTitle>{activity.location || '부제 없음'}</S.BuySubTitle>
                  </S.Column>
                </S.Row>
              </S.BuyDetail>
            ))}
          </S.BuyList>
        )}
      </S.LikeListContainer>
    </>
  );
}

export default LikeList;
