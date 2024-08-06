import React, { useState, useEffect, useRef } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaTimes } from 'react-icons/fa';
import * as S from "./Styled";
import uploadImg from '../../assets/imgplus.png';

import HealthImage1 from '../../assets/health/health1.png';
import HealthImage2 from '../../assets/health/health2.png';
import HealthImage3 from '../../assets/health/health3.png';
import HealthImage4 from '../../assets/health/health4.png';
import HealthImage5 from '../../assets/health/health5.png';
import HealthImage6 from '../../assets/health/health6.png';
import HealthImage7 from '../../assets/health/health7.png';
import HealthImage8 from '../../assets/health/health8.png';
import HealthImage9 from '../../assets/health/health9.png';
import HealthImage10 from '../../assets/health/health10.png';

import { API } from '../../api';

const HealthChallenge = () => {
  const [showForm, setShowForm] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", selectedImage: "", start_date: "", end_date: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [challenges, setChallenges] = useState([]);
  const [userId, setUserId] = useState(null);
  const fileInputRef = useRef(null);
  const [previewSrc, setPreviewSrc] = useState("");

  const fetchChallenge = async () => {
    try {
      const response = await API.get('/health/challenges/');
      setChallenges(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await API.get('/users/profiles');
      const userId = response.data[0].user;
      setUserId(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleImageToggle = async (image) => {
    const file = await urlToFile(image, `image${Date.now()}.png`, 'image/png');
    setSelectedImage(file);
    setPreviewSrc(image);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewSrc(preview);
    }
  };

  const urlToFile = async (url, filename, mimeType) => {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    return new File([buf], filename, { type: mimeType });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newEvent.title || !startDate || !endDate) {
      alert("모든 필드를 채워주세요.");
      return;
    }

    const formData = new FormData();
    formData.append('title', newEvent.title);
    formData.append('start_date', startDate.toISOString().split('T')[0]);
    formData.append('end_date', endDate.toISOString().split('T')[0]);
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    try {
      const response = await API.post('/health/challenges/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setShowForm(false);
      fetchChallenge();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/health/challenges/${id}/`);
      fetchChallenge();
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoin = async (id) => {
    if (!userId) return;

    try {
      const challenge = challenges.find(challenge => challenge.id === id);
      const updatedParticipants = [...challenge.participants, userId];

      const response = await API.patch(`/health/challenges/${id}/`, {
        participants: updatedParticipants
      });
      fetchChallenge();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChallenge();
    fetchUser();
  }, []);

  const calculateDaysDifference = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((date2 - date1) / oneDay);
  };

  const getChallengeStatus = (start_date, end_date) => {
    const now = new Date();
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    if (now < startDate) {
      return `시작까지 D-${calculateDaysDifference(now, startDate)}일`;
    } else if (now >= startDate && now <= endDate) {
      return `진행중, 종료까지 D-${calculateDaysDifference(now, endDate)}일`;
    } else if (now > endDate) {
      return '종료';
    }
  };

  return (
    <>
      <S.BigBox>
        <S.Rowbetween>
          <S.ChallengeTitle>건강 챌린지</S.ChallengeTitle>
          <S.AddEventButton onClick={() => setShowForm(true)}>챌린지 추가하기+</S.AddEventButton>
        </S.Rowbetween>
        <S.UnderContainer>
          {challenges.map((challenge) => (
            <S.ContainerBox key={challenge.id}>
              <S.DeleteButton onClick={() => handleDelete(challenge.id)}>
                <FaTimes />
              </S.DeleteButton>
              <S.IMG src={challenge.image || HealthImage1} alt="대표 이미지" />
              <S.Column>
                <S.Rowbetween>
                  <S.Row>
                    <S.BoxText>참여자</S.BoxText>
                    {challenge.participants.map((participant, index) => (
                      <S.JoinImage key={index} src={participant.image || ""} alt="참여자 이미지" />
                    ))}
                  </S.Row>
                  <S.Row>
                    <S.Status>{getChallengeStatus(challenge.start_date, challenge.end_date)}</S.Status>
                  </S.Row>
                </S.Rowbetween>
                <div>
                  <S.BoxTitle>{challenge.title}</S.BoxTitle>
                  <S.BoxTime>{challenge.start_date} ~ {challenge.end_date}</S.BoxTime>
                </div>
                <S.ApplyButton onClick={() => handleJoin(challenge.id)}>신청하기</S.ApplyButton>
              </S.Column>
            </S.ContainerBox>
          ))}
        </S.UnderContainer>
      </S.BigBox>
      {showForm && (
        <>
          <S.BackWrapping onClick={() => setShowForm(false)} />
          <S.NewEventForm onSubmit={handleSubmit}>
            <S.FormContent>
              <S.FormTitle>건강챌린지</S.FormTitle>
              <S.FormText>대표이미지</S.FormText>
              <S.IconList>
                {[HealthImage1, HealthImage2, HealthImage3, HealthImage4, HealthImage5, HealthImage6, HealthImage7, HealthImage8, HealthImage9, HealthImage10].map((image, index) => (
                  <S.IconWrapper key={index}>
                    <S.ToggleCircle
                      selected={previewSrc === image}
                      onClick={() => handleImageToggle(image)}
                    />
                    <S.HealthIcon
                      src={image}
                      alt={`HealthImage${index + 1}`}
                    />
                  </S.IconWrapper>
                ))}
              </S.IconList>
              <S.IconList>
                <S.CustomPhotoButton
                  src={uploadImg}
                  alt="Select Photos"
                  onClick={() => fileInputRef.current.click()}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
                {previewSrc && (
                  <S.PreviewContainer>
                    <S.PreviewImage src={previewSrc} alt="Preview" />
                  </S.PreviewContainer>
                )}
              </S.IconList>
              <S.FormText>건강챌린지 제목</S.FormText>
              <S.ContentContainer>
                <S.EventInputStyle
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  required
                />
              </S.ContentContainer>
              <S.FormText>챌린지 기간</S.FormText>
              <S.ContentContainer>
                <DatePicker
                  selected={startDate}
                  placeholderText="시작 날짜"
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy-MM-dd"
                  customInput={<S.DateSelectInput />}
                />
              </S.ContentContainer>
              <S.ContentContainer>
                <DatePicker
                  selected={endDate}
                  placeholderText="종료 날짜"
                  onChange={(date) => setEndDate(date)}
                  dateFormat="yyyy-MM-dd"
                  customInput={<S.DateSelectInput />}
                />
              </S.ContentContainer>
                <S.Rowbetween>
                  <S.HospitalCloseButton onClick={() => setShowForm(false)}>취소하기</S.HospitalCloseButton>
                  <S.HospitalAddButton type="submit">등록하기</S.HospitalAddButton>
                </S.Rowbetween>
            </S.FormContent>
          </S.NewEventForm>
        </>
      )}
    </>
  );
}

export default HealthChallenge;
