import React, { useState, useEffect, useRef } from "react";
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
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatEndRef = useRef(null);

  const predefinedQA = [
    { question: "모해는 어떤 서비스인가요?", answer: "모해는 부모님과 자녀 간의 소통을 촉진하고, 서로의 삶을 더 잘 이해하고 지원할 수 있도록 돕는 혁신적인 웹 서비스입니다. 이와 더불어 부모님 세대의 건강을 간접적으로 자녀가 챙기고, 부모님 스스로도 자신의 건강과 교육을 챙길 수 있습니다." },
    { question: "부모님이랑 무엇을 할까요?", answer: "부모님과 함께 할 수 있는 활동으로는 산책, 요리, 영화 감상, 또는 근처 공원에서 피크닉을 추천드립니다. 또한, 모해의 문화생활 페이지에서 부모님과 함께 참여할 수 있는 지역 행사나 전시회를 찾아보세요." },
    { question: "건강 챌린지는 어떻게 하나요?", answer: "모해의 건강 챌린지 기능은 사용자가 건강 목표를 설정하고 달성할 수 있도록 돕는 기능입니다. 챌린지를 시작하려면 메인 페이지에서 '건강' 섹션으로 이동하여 원하는 챌린지를 선택하세요." },
    { question: "가족과 함께 즐길 수 있는 활동은 무엇이 있나요?", answer: "가족과 함께 즐길 수 있는 활동으로는 가족 게임, 공동 요리 시간, 야외 캠핑, 또는 가족 사진첩 만들기 등이 있습니다. 모해의 일정 캘린더를 사용하여 가족 이벤트를 계획해 보세요." },
    { question: "가족 사진첩을 만드는 방법은 무엇인가요?", answer: "가족 사진첩을 만들려면 모해의 사진첩 기능으로 이동한 후 '새 앨범 만들기'를 선택하세요. 가족과 함께 찍은 사진을 업로드하고, 특별한 추억을 공유해 보세요." },
    { question: "부모님과 함께 할 수 있는 문화생활 활동은 무엇이 있나요?", answer: "부모님과 함께할 수 있는 문화생활 활동으로는 미술 전시회, 음악회, 연극 관람 등이 있습니다. 모해의 문화생활 페이지에서 가까운 행사 정보를 확인해 보세요." },
    { question: "가족 모임을 계획하려면 어떻게 해야 하나요?", answer: "가족 모임을 계획하려면 모해의 일정 캘린더 기능을 사용해 보세요. 일정에 가족 모임을 추가하고, 가족 구성원들을 일정에 추가할 수 있습니다." },
    { question: "부모님과 함께 운동할 수 있는 방법은 무엇이 있나요?", answer: "부모님과 함께 운동하려면 모해의 건강 챌린지 섹션에서 가벼운 산책, 요가, 또는 스트레칭 루틴을 선택해 함께 운동을 시작해 보세요." },
    { question: "가족과 함께 할 수 있는 건강 챌린지가 있나요?", answer: "가족과 함께 할 수 있는 건강 챌린지로는 '운동장 한바퀴 뛰기', '매일 물 2리터 마시기' 등이 있습니다. 가족 모두 함께 참여하여 건강한 생활을 유지해 보세요." },
    { question: "부모님을 위한 특별한 이벤트를 추천해 주세요.", answer: "부모님을 위한 특별한 이벤트로는 깜짝 가족 모임, 부모님과 함께하는 추억 여행, 또는 부모님께 감사의 편지 쓰기를 추천합니다. 모해의 일정 캘린더에 이벤트를 기록해 보세요." }
  ];

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

  useEffect(() => {
    if (showform) {
      setRandomQuestions(predefinedQA.sort(() => 0.5 - Math.random()).slice(0, 3));
    }
  }, [showform]);

  useEffect(() => {
    scrollToBottom();
  }, [responses]);

  const handleAudioChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleUpload = async () => {
    if (!question && !audioFile) {
      alert("Please provide a question or audio file.");
      return;
    }

    const formData = new FormData();
    if (audioFile) formData.append('audio', audioFile);
    if (question) formData.append('question', question);

    // Add the question to responses immediately
    const newResponse = { question, answer: '', displayedAnswer: '', animating: true };
    setResponses(prevResponses => [...prevResponses, newResponse]);

    try {
      const res = await API.post('/api/ask/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setResponses(prevResponses => {
        const updatedResponses = [...prevResponses];
        const lastResponseIndex = updatedResponses.length - 1;
        updatedResponses[lastResponseIndex] = {
          ...updatedResponses[lastResponseIndex],
          answer: res.data.answer,
          displayedAnswer: '',
          animating: true
        };
        return updatedResponses;
      });

      setQuestion('');
      setAudioFile(null);
      setAnimating(true);
      setCurrentIndex(0);
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

  const handlePredefinedQuestionClick = (qa) => {
    const newResponse = { question: qa.question, answer: qa.answer, displayedAnswer: '', animating: true };
    setResponses(prevResponses => [...prevResponses, newResponse]);
    setAnimating(true);
    setCurrentIndex(0);
  };

  useEffect(() => {
    if (animating) {
      const lastResponseIndex = responses.length - 1;
      if (lastResponseIndex >= 0) {
        const lastResponse = responses[lastResponseIndex];
        if (lastResponse && currentIndex < lastResponse.answer.length) {
          setTimeout(() => {
            setResponses(prevResponses => {
              const updatedResponses = [...prevResponses];
              updatedResponses[lastResponseIndex] = {
                ...lastResponse,
                displayedAnswer: lastResponse.answer.substring(0, currentIndex + 1)
              };
              return updatedResponses;
            });
            setCurrentIndex(currentIndex + 1);
          }, 50);
        } else {
          setAnimating(false);
        }
      }
    }
  }, [animating, currentIndex, responses]);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
                      {randomQuestions.map((qa, index) => (
                        <S.MomoText3 key={index} onClick={() => handlePredefinedQuestionClick(qa)}>
                          🧐 {qa.question}
                        </S.MomoText3>
                      ))}
                    </S.MomoTextBox>
                  </S.TextContain>
                </S.TextContainer>
                {responses.map((response, index) => (
                  <React.Fragment key={index}>
                    <S.TextContainer>
                      <S.TextContain2>
                        <S.MomoText4>{response.question}</S.MomoText4>
                      </S.TextContain2>
                      <S.MomoIcon2 style={{ width: '1.875rem', height: '1.75rem', fontSize: '2.5rem', borderRadius: '0.625rem', boxShadow: 'none' }}>o</S.MomoIcon2>
                    </S.TextContainer>
                    <S.TextContainer>
                      <S.MomoIcon2 style={{ width: '2rem', height: '1.75rem', fontSize: '2.5rem', borderRadius: '0.625rem', boxShadow: 'none' }}>o</S.MomoIcon2>
                      <S.TextContain2>
                        <S.MomoText2 className="typing">{response.displayedAnswer}</S.MomoText2>
                      </S.TextContain2>
                    </S.TextContainer>
                  </React.Fragment>
                ))}
                <div ref={chatEndRef} />
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
