import React, { useState, useEffect } from "react";

import { API } from "../../api";
import * as S from "./Styled";
import { FaTimes } from "react-icons/fa";

const Footer = () => {
  const [responses, setResponses] = useState([]);
  const [audioFile, setAudioFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [showemoji, setShowemoji] = useState(true);
  const [showform, setShowform] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await API.get('/api/user_profile/');
        setNickname(res.data.nickname);
        setProfilePicture(res.data.profile_picture);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleAudioChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    let hasData = false;

    if (audioFile) {
      formData.append('audio', audioFile);
      hasData = true;
    }

    if (question) {
      formData.append('question', question);
      hasData = true;
    }

    if (!hasData) {
      alert("Please provide a question or audio file.");
      return;
    }

    try {
      const res = await API.post('/api/ask/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResponses(prevResponses => [...prevResponses, { question, answer: res.data.answer }]);
      setQuestion('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const startRecognition = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setQuestion(speechResult);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleshowform = () => {
    setShowemoji(false);
    setShowform(true);
  };

  const handleshowemoji = () => {
    setShowemoji(true);
    setShowform(false);
  };

  return (
    <>
      {showemoji && (
        <S.Container>
          <S.MomoIcon onClick={handleshowform}>o</S.MomoIcon>
        </S.Container>
      )}
      {showform && (
        <S.Container>
          <S.FormBox>
            <S.HeadBox>
              <S.MomoIcon2 style={{ width: '3.75rem', height: '3.75rem', fontSize: '4.875rem', borderRadius: '1.125rem', boxShadow: 'none' }}>o</S.MomoIcon2>
              <S.Column>
                <S.Text1>모모 챗봇</S.Text1>
                <S.Text2>{nickname}님 모모에게 무엇이든지 물어보세요</S.Text2>
              </S.Column>
            </S.HeadBox>
            <S.HeadBody>
              <S.Column style={{ gap: '1rem' }}>
                <S.TextContainer>
                  <S.MomoIcon2 style={{ width: '1.875rem', height: '1.75rem', fontSize: '2.5rem', borderRadius: '0.625rem', boxShadow: 'none' }}>o</S.MomoIcon2>
                  <S.TextContain>
                    <S.MomoText1>가족 건강 소셜 플랫폼, MOHAE</S.MomoText1>
                    <S.MomoText2>모해는 가족이 서로의 일상에 스며드는 가족 친화 플랫폼 입니다.</S.MomoText2>
                    <S.MomoTextBox>
                      <S.MomoText3>🧐 모해에 어떤 서비스가 있나요?</S.MomoText3>
                      <S.MomoText3>👨 부모님이랑 무엇을 할까요?</S.MomoText3>
                      <S.MomoText3>💪 건강챌린지는 어떻게 하나요?</S.MomoText3>
                    </S.MomoTextBox>
                  </S.TextContain>
                </S.TextContainer>
                {responses.map((response, index) => (
                  <React.Fragment key={index}>
                    <S.TextContainer>
                      <S.TextContain2>
                        <S.MomoText4>{response.question}</S.MomoText4>
                      </S.TextContain2>
                      {profilePicture ? <img src={`http://127.0.0.1:8000${profilePicture}`} alt="Profile" width="50" height="50" /> : <S.MomoIcon2 style={{ width: '1.875rem', height: '1.75rem', fontSize: '2.5rem', borderRadius: '0.625rem', boxShadow: 'none' }}>o</S.MomoIcon2>}
                    </S.TextContainer>
                    <S.TextContainer>
                      <S.MomoIcon2 style={{ width: '2rem', height: '1.75rem', fontSize: '2.5rem', borderRadius: '0.625rem', boxShadow: 'none' }}>o</S.MomoIcon2>
                      <S.TextContain2>
                        <S.MomoText2>{response.answer}</S.MomoText2>
                      </S.TextContain2>
                    </S.TextContainer>
                  </React.Fragment>
                ))}
              </S.Column>
            </S.HeadBody>
            <S.HeadFooter>
              <S.TextBox
                value={question}
                onChange={handleQuestionChange}
                placeholder="메시지를 입력해주세요."
              />
              <S.StyledMD onClick={startRecognition} />
              <S.StyledRI onClick={handleUpload} />
            </S.HeadFooter>
          </S.FormBox>
          <S.XIcon onClick={handleshowemoji}><FaTimes /></S.XIcon>
        </S.Container>
      )}
    </>
  );
};

export default Footer;
