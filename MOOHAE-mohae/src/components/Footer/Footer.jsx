import React, { useState } from "react";
import { API } from "../../api";
import * as S from "./Styled";

const Footer = () => {
  const [response, setResponse] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [question, setQuestion] = useState('');

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
      setResponse(res.data.answer);
      speakText(res.data.answer);
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

  return (
    <S.Container>
      <input type="file" accept="audio/*" onChange={handleAudioChange} />
      <textarea value={question} onChange={handleQuestionChange} placeholder="Type your question or use the microphone" />
      <S.Dongurami onClick={startRecognition}>녹음시작</S.Dongurami>
      <S.Dongurami onClick={handleUpload}>업로드후답변</S.Dongurami>
      <p>답변: {response}</p>
    </S.Container>
  );
};

export default Footer;
