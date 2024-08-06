import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import { API } from '../../../api';

const LikeList = () => {
  const [selectedTab, setSelectedTab] = useState('buy');
  const [reservationsData, setReservationsData] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [activitiesData, setActivitiesData] = useState([]); // 활동 데이터를 저장할 상태

  const GetReservationsData = async () => {
    try {
      const response = await API.get("/users/mypage/confirmed_reservations");
      setReservationsData(response.data);
      console.log("reservations", response.data);
    } catch (error) {
      console.error("Error fetching reservations data:", error);
    }
  };

  useEffect(() => {
    GetReservationsData();

    const fetchLikedItems = async () => {
      try {
        // 서버로부터 기존에 좋아요 표시된 아이템 가져오기
        const likedResponse = await API.get('/culture/likes');
        const likedItemsFromServer = likedResponse.data.reduce((acc, likedItem) => {
          acc[likedItem.activity] = likedItem;
          return acc;
        }, {});

        setLikedItems(likedItemsFromServer);
        console.log('Liked items data:', likedItemsFromServer);

        // 좋아요 표시된 각 활동에 대해 추가 데이터를 가져오기
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
                  <S.BuyImage></S.BuyImage>
                  <S.Column>
                    <S.BuyMoney>활동 이름 : {reservation.reservation.activity?.title || 'No title available'}</S.BuyMoney>
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
                {/* likedItems에서 해당 활동의 liked_at 정보를 가져와 사용 */}
                <S.BuyTime>{new Date(likedItems[activity.id]?.liked_at).toLocaleDateString()}</S.BuyTime>
                <S.Row>
                  {/* Log thumbnail information */}
                  {console.log(`Activity ID: ${activity.id}, Thumbnail: ${activity.thumbnail}`)}
                  {activity.thumbnail 
                    ? <S.BuyImage src={activity.thumbnail} alt={activity.title} />
                    : console.log(`No thumbnail available for Activity ID: ${activity.id}`)
                  }
                  <S.Column>
                    <S.hi>
                      <S.BuyMoney>{activity.title}</S.BuyMoney>
                    </S.hi>
                    {/* 추가 정보 출력 */}
                    <S.BuySubTitle>
                      {activity.location || '부제 없음'}
                    </S.BuySubTitle>
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
