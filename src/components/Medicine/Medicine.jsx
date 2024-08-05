import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { LuPill } from "react-icons/lu";
import * as S from "./Styled";

import Clock from "../../assets/Clock.png";

import { API } from "../../api";

const Medicine = () => {
  const [showForm, setShowForm] = useState(false);
  const [newMedicineTitle, setNewMedicineTitle] = useState('');
  const [newMedicineTime, setNewMedicineTime] = useState({
    morning: 'disabled',
    lunch: 'disabled',
    dinner: 'disabled',
  });
  const [checkStates, setCheckStates] = useState([]);
  const [profileMap, setProfileMap] = useState({});

  const fetchMedicines = async () => {
    try {
      const response = await API.get('/health/medications/');
      setCheckStates(response.data);
    } catch (error) {
      console.error('Failed to fetch medicines:', error);
    }
  };

  const fetchFamilyProfiles = async () => {
    try {
      const response = await API.get("/users/family");
      const profileMap = {};
      response.data.forEach(family => {
        family.profiles.forEach(profile => {
          profileMap[profile.user] = {
            nickname: profile.nickname,
            imageUrl: profile.profile_picture
          };
        });
      });
      setProfileMap(profileMap);
    } catch (error) {
      console.error('Error fetching family profiles:', error);
    }
  };

  useEffect(() => {
    fetchMedicines();
    fetchFamilyProfiles();
  }, []);

  const toggleCheck = async (index, time) => {
    const updatedCheckStates = checkStates.map((state, i) => {
      if (i === index && state[time] !== 'disabled') {
        return { ...state, [time]: state[time] === 'true' ? 'false' : 'true' };
      }
      return state;
    });

    setCheckStates(updatedCheckStates);

    const updatedState = updatedCheckStates[index];

    try {
      await API.patch(`/health/medications/${updatedState.id}/`, { [time]: updatedState[time] });
    } catch (error) {
      console.error('Failed to update medicine:', error);
    }
  };

  const toggleNewMedicineTime = (time) => {
    setNewMedicineTime(prevState => ({
      ...prevState,
      [time]: prevState[time] === 'disabled' ? 'false' : 'disabled'
    }));
  };

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  const handleAddMedicine = async () => {
    const newMedicine = {
      name: newMedicineTitle,
      morning: newMedicineTime.morning,
      lunch: newMedicineTime.lunch,
      dinner: newMedicineTime.dinner,
    };

    try {
      const response = await API.post('/health/medications/', newMedicine);
      console.log("Add Medicine Response: ", response.data);
      setCheckStates(prevStates => [...prevStates, response.data]);
      setNewMedicineTitle('');
      setNewMedicineTime({ morning: 'disabled', lunch: 'disabled', dinner: 'disabled' });
      setShowForm(false);
    } catch (error) {
      console.error('Failed to add medicine:', error.response?.data || error);
    }
  };

  const handleDeleteMedicine = async (id) => {
    try {
      await API.delete(`/health/medications/${id}/`);
      setCheckStates(prevStates => prevStates.filter(medicine => medicine.id !== id));
    } catch (error) {
      console.error('Failed to delete medicine:', error);
    }
  };

  const renderProgressBar = (checkState) => {
    const times = ['morning', 'lunch', 'dinner'];
    const activeTimes = times.filter(time => checkState[time] !== 'disabled');
    const activeCount = activeTimes.length;

    const progressBars = activeTimes.map((time, index) => {
      const isActive = checkState[time] === 'true';
      const width = 100 / activeCount;
      return (
        <S.CheckBarPart
          key={time}
          style={{ width: `${width}%`, backgroundColor: isActive ? '#2D539E' : '#D9D9D9' }}
        />
      );
    });

    return <S.CheckBarContainer>{progressBars}</S.CheckBarContainer>;
  };

  const getProfilePictureUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `http://127.0.0.1:8000${url}`;
  };

  return (
    <S.BigBox>
      <S.Column>
        <S.Row>
          <S.MedicineTitle1>비타민⋅약 복용</S.MedicineTitle1>
          <S.AddButton onClick={handleFormToggle}>복용약 추가하기+</S.AddButton>
        </S.Row>
        <S.MedicineContent>
          <S.IMG src={Clock} alt="Clock" />
          2024년 7월 2일(화) 13:12 PM (점심)
        </S.MedicineContent>
      </S.Column>
      {checkStates.length === 0 ? (
        <S.MedicineContainers>
          <S.CenterWord>
            아직 등록된 약이 없습니다.
          </S.CenterWord>
        </S.MedicineContainers>
      ) : (
        <S.MedicineContainers>
          {checkStates.map((checkState, index) => (
            <S.MedicineContainer key={checkState.id}>
              <S.MedicineHeader>
                <div style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                  <S.MedicineWho>{profileMap[checkState.user]?.nickname || "나"}</S.MedicineWho>
                  <S.ProfileImage src={getProfilePictureUrl(profileMap[checkState.user]?.imageUrl || "")} />
                </div>
                <FaTimes onClick={() => handleDeleteMedicine(checkState.id)} style={{ cursor: 'pointer', width: '15px', height: '15px' }} />
              </S.MedicineHeader>
              <S.MedicineTitle>
                <S.MedicineNotice>{checkState.name}을(를) 아직 복용하지 않았습니다.</S.MedicineNotice>
              </S.MedicineTitle>
              <S.Checks>
                {checkState.morning !== 'disabled' && (
                  <S.Check onClick={() => toggleCheck(index, 'morning')}>
                    <S.CheckTime>아침</S.CheckTime>
                    {checkState.morning === 'true' ? (
                      <S.CheckCircle>
                        <S.StyFaCheck />
                      </S.CheckCircle>
                    ) : (
                      <S.CheckNoCircle />
                    )}
                  </S.Check>
                )}
                {checkState.lunch !== 'disabled' && (
                  <S.Check onClick={() => toggleCheck(index, 'lunch')}>
                    <S.CheckTime>점심</S.CheckTime>
                    {checkState.lunch === 'true' ? (
                      <S.CheckCircle>
                        <S.StyFaCheck />
                      </S.CheckCircle>
                    ) : (
                      <S.CheckNoCircle />
                    )}
                  </S.Check>
                )}
                {checkState.dinner !== 'disabled' && (
                  <S.Check onClick={() => toggleCheck(index, 'dinner')}>
                    <S.CheckTime>저녁</S.CheckTime>
                    {checkState.dinner === 'true' ? (
                      <S.CheckCircle>
                        <S.StyFaCheck />
                      </S.CheckCircle>
                    ) : (
                      <S.CheckNoCircle />
                    )}
                  </S.Check>
                )}
              </S.Checks>
              {renderProgressBar(checkState)}
            </S.MedicineContainer>
          ))}
        </S.MedicineContainers>
      )}
      {showForm && (
        <>
          <S.backWrapping onClick={() => setShowForm(false)} />
          <S.NewEventForm>
            <S.FormContent>
              <S.FormTitle>영양제⋅약</S.FormTitle>
              <S.FormText>영양제⋅약 이름</S.FormText>
              <S.contentContainer>
                <LuPill color="#2D539E" size={25} />
                <S.EventInputStyle
                  type="text"
                  value={newMedicineTitle}
                  onChange={(e) => setNewMedicineTitle(e.target.value)}
                  placeholder="영양제·약 이름 또는 특징을 입력해주세요."
                />
              </S.contentContainer>
              <S.FormText>복용시기</S.FormText>
              <S.Checks>
                <S.Check onClick={() => toggleNewMedicineTime('morning')}>
                  <S.CheckTime>아침</S.CheckTime>
                  {newMedicineTime.morning !== 'disabled' ? (
                    <S.CheckCircle>
                      <S.StyFaCheck />
                    </S.CheckCircle>
                  ) : (
                    <S.CheckNoCircle />
                  )}
                </S.Check>
                <S.Check onClick={() => toggleNewMedicineTime('lunch')}>
                  <S.CheckTime>점심</S.CheckTime>
                  {newMedicineTime.lunch !== 'disabled' ? (
                    <S.CheckCircle>
                      <S.StyFaCheck />
                    </S.CheckCircle>
                  ) : (
                    <S.CheckNoCircle />
                  )}
                </S.Check>
                <S.Check onClick={() => toggleNewMedicineTime('dinner')}>
                  <S.CheckTime>저녁</S.CheckTime>
                  {newMedicineTime.dinner !== 'disabled' ? (
                    <S.CheckCircle>
                      <S.StyFaCheck />
                    </S.CheckCircle>
                  ) : (
                    <S.CheckNoCircle />
                  )}
                </S.Check>
              </S.Checks>
              <S.row>
                <S.MedicineCloseButton onClick={() => setShowForm(false)}>취소하기</S.MedicineCloseButton>
                <S.MedicineAddButton onClick={handleAddMedicine}>등록하기</S.MedicineAddButton>
              </S.row>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
    </S.BigBox>
  );
}

export default Medicine;
