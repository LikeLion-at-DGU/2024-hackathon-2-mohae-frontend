import React, { useState } from "react";

import Check from "../../assets/check.png";

import * as S from "./Styled";

const Medicine = () => {

  const [newEvent, setNewEvent] = useState({ title: '', start: '', location: '' });
  const [showForm, setShowForm] = useState(false);
  
  const [checkStates, setCheckStates] = useState([
    { morning: true, lunch: false, dinner: false },
    { morning: false, lunch: false, dinner: false },
    { morning: false, lunch: false, dinner: false },
    { morning: false, lunch: false, dinner: false },
  ]);

  const toggleCheck = (index, time) => {
    setCheckStates(prevStates =>
      prevStates.map((state, i) => {
        if (i === index) {
          return { ...state, [time]: !state[time] };
        }
        return state;
      })
    );
  };
  

  return (
    <>
      <S.AddButton>추가하기+</S.AddButton>
      <S.MedicineContainers>
        {checkStates.map((checkState, index) => (
          <S.MedicineContainer key={index}>
            <S.MedicineHeader>
              <S.MedicineWho>나</S.MedicineWho>
              <S.MoreDetail>더보기</S.MoreDetail>
            </S.MedicineHeader>
            <S.MedicineTitle>
              <S.ProfileImage />
              <S.MedicineNotice>아직 점심 비타민을 안먹었어요</S.MedicineNotice>
            </S.MedicineTitle>
            <S.Checks>
              <S.Check onClick={() => toggleCheck(index, 'morning')}>
                <S.CheckTime>아침</S.CheckTime>
                {checkState.morning ? (
                  <S.CheckCircle>
                    <img src={Check} alt="Check" style={{ width: 40, height: 40 }} />
                  </S.CheckCircle>
                ) : (
                  <S.CheckNoCircle />
                )}
              </S.Check>
              <S.Check onClick={() => toggleCheck(index, 'lunch')}>
                <S.CheckTime>점심</S.CheckTime>
                {checkState.lunch ? (
                  <S.CheckCircle>
                    <img src={Check} alt="Check" style={{ width: 40, height: 40 }} />
                  </S.CheckCircle>
                ) : (
                  <S.CheckNoCircle />
                )}
              </S.Check>
              <S.Check onClick={() => toggleCheck(index, 'dinner')}>
                <S.CheckTime>저녁</S.CheckTime>
                {checkState.dinner ? (
                  <S.CheckCircle>
                    <img src={Check} alt="Check" style={{ width: 40, height: 40 }} />
                  </S.CheckCircle>
                ) : (
                  <S.CheckNoCircle />
                )}
              </S.Check>
            </S.Checks>
            <S.CheckBar>
              <S.CheckBarAll />
              {/* 진행 상태 바 구현 부분은 필요에 따라 수정 */}
              {checkState.morning && <S.CheckBar33 />}
              {checkState.lunch && <S.CheckBar66 />}
              {checkState.dinner && <S.CheckBar100 />}
            </S.CheckBar>
          </S.MedicineContainer>
        ))}
      </S.MedicineContainers>
    </>
  );
}

export default Medicine;