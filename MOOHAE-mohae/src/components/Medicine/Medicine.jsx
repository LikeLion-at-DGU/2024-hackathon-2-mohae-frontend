import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { LuPill } from "react-icons/lu";
import * as S from "./Styled";

const Medicine = () => {
  const [showForm, setShowForm] = useState(false);
  const [newMedicineTitle, setNewMedicineTitle] = useState('');
  const [newMedicineTime, setNewMedicineTime] = useState({
    morning: 'disabled',
    lunch: 'disabled',
    dinner: 'disabled',
  });
  const [checkStates, setCheckStates] = useState([
    { title: '비타민', morning: true, lunch: false, dinner: 'disabled' },
    { title: '오메가3', morning: 'disabled', lunch: false, dinner: false },
    { title: '칼슘', morning: false, lunch: 'disabled', dinner: 'disabled' },
    { title: '마그네슘', morning: false, lunch: false, dinner: true },
  ]);

  const toggleCheck = (index, time) => {
    setCheckStates(prevStates =>
      prevStates.map((state, i) => {
        if (i === index && state[time] !== 'disabled') {
          return { ...state, [time]: state[time] === true ? false : true };
        }
        return state;
      })
    );
  };

  const toggleNewMedicineTime = (time) => {
    setNewMedicineTime(prevState => ({
      ...prevState,
      [time]: prevState[time] === 'disabled' ? false : 'disabled'
    }));
  };

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  const handleAddMedicine = () => {
    setCheckStates(prevStates => [
      ...prevStates,
      { title: newMedicineTitle, ...newMedicineTime }
    ]);
    setNewMedicineTitle('');
    setNewMedicineTime({ morning: 'disabled', lunch: 'disabled', dinner: 'disabled' });
    setShowForm(false);
  };

  return (
    <>
      <S.Realative>
        <S.AddButton onClick={handleFormToggle}>추가하기+</S.AddButton>
      </S.Realative>
      <S.MedicineContainers>
        {checkStates.map((checkState, index) => (
          <S.MedicineContainer key={index}>
            <S.MedicineHeader>
              <S.MedicineWho>나</S.MedicineWho>
              <S.MoreDetail>더보기</S.MoreDetail>
            </S.MedicineHeader>
            <S.MedicineTitle>
              <S.ProfileImage />
              <S.MedicineNotice>{checkState.title}을(를) 아직 복용하지 않았습니다.</S.MedicineNotice>
            </S.MedicineTitle>
            <S.Checks>
              {checkState.morning !== 'disabled' && (
                <S.Check onClick={() => toggleCheck(index, 'morning')}>
                  <S.CheckTime>아침</S.CheckTime>
                  {checkState.morning ? (
                    <S.CheckCircle>
                      <FaCheck style={{ width: 40, height: 40, color: '#fff' }} />
                    </S.CheckCircle>
                  ) : (
                    <S.CheckNoCircle />
                  )}
                </S.Check>
              )}
              {checkState.lunch !== 'disabled' && (
                <S.Check onClick={() => toggleCheck(index, 'lunch')}>
                  <S.CheckTime>점심</S.CheckTime>
                  {checkState.lunch ? (
                    <S.CheckCircle>
                      <FaCheck style={{ width: 40, height: 40, color: '#fff' }} />
                    </S.CheckCircle>
                  ) : (
                    <S.CheckNoCircle />
                  )}
                </S.Check>
              )}
              {checkState.dinner !== 'disabled' && (
                <S.Check onClick={() => toggleCheck(index, 'dinner')}>
                  <S.CheckTime>저녁</S.CheckTime>
                  {checkState.dinner ? (
                    <S.CheckCircle>
                      <FaCheck style={{ width: 40, height: 40, color: '#fff' }} />
                    </S.CheckCircle>
                  ) : (
                    <S.CheckNoCircle />
                  )}
                </S.Check>
              )}
            </S.Checks>
            <S.CheckBar>
              <S.CheckBarAll />
              {checkState.morning === true && <S.CheckBar33 />}
              {checkState.lunch === true && <S.CheckBar66 />}
              {checkState.dinner === true && <S.CheckBar100 />}
            </S.CheckBar>
          </S.MedicineContainer>
        ))}
      </S.MedicineContainers>
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
                      <FaCheck style={{ width: 40, height: 40, color: '#fff' }} />
                    </S.CheckCircle>
                  ) : (
                    <S.CheckNoCircle />
                  )}
                </S.Check>
                <S.Check onClick={() => toggleNewMedicineTime('lunch')}>
                  <S.CheckTime>점심</S.CheckTime>
                  {newMedicineTime.lunch !== 'disabled' ? (
                    <S.CheckCircle>
                      <FaCheck style={{ width: 40, height: 40, color: '#fff' }} />
                    </S.CheckCircle>
                  ) : (
                    <S.CheckNoCircle />
                  )}
                </S.Check>
                <S.Check onClick={() => toggleNewMedicineTime('dinner')}>
                  <S.CheckTime>저녁</S.CheckTime>
                  {newMedicineTime.dinner !== 'disabled' ? (
                    <S.CheckCircle>
                      <FaCheck style={{ width: 40, height: 40, color: '#fff' }} />
                    </S.CheckCircle>
                  ) : (
                    <S.CheckNoCircle />
                  )}
                </S.Check>
              </S.Checks>
              <S.row>
                <S.MedicineCloseButton onClick={() => setShowForm(false)}>닫기</S.MedicineCloseButton>
                <S.MedicineAddButton onClick={handleAddMedicine}>추가</S.MedicineAddButton>
              </S.row>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
    </>
  );
}

export default Medicine;
