import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const PageStyle = createGlobalStyle`
  body {
    background-color: #F7F8FB;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  width: 100%;
`;

const Header = styled.h1`
  color: #2a82da;
  margin-bottom: 20px;
  font-family: "Cafe24 Meongi B";
  justify-content: flex-start;
`;

const P1 = styled.h2`
  color: #000;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  span {
    color: #000;
    font-family: "Cafe24 Meongi B";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const UnderText = styled.p`
  color: #7a7a7a;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Nemo = styled.div`
  width: 636px;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const First = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #000;
  font-family: "NanumSquare Neo";
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 60px;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  color: #000;
  text-align: left;
  font-family: "NanumSquare Neo OTF";
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5px;
  width: 100px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  width: 311px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 3px 10px;
  border-radius: 10px;
  border: 1.2px solid #ababab;
  background: #fff;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 224px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #2d539e;
  color: #fff;
  font-family: "Cafe24 Dongdong";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  padding: 7px 55px;
  gap: 5px;
`;

const Button1 = styled(Button)`
  background: #ffffff;
  border: 1px solid #2d539e;
  color: #2d539e;
`;

const Find = styled.div`
  text-align: center;
  font-family: "Cafe24 Dongdong";
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const KAKAO = styled.p`
  color: #ababab;
  text-align: center;
  font-family: "Cafe24 Dongdong";
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const KakakoButton = styled.div`
  height: 45px;
  width: 224px;
  background-color: #ffeb00;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-family: "Cafe24 Dongdong";
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 10px;
  gap: 5px;

  &:hover {
    background-color: #fdd835;
  }
`;

const Error = styled.p`
  color: red;
  font-family: "NanumSquare Neo";
  font-size: 16px;
  margin-top: -15px;
  margin-bottom: 10px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const kakaoClientId = import.meta.env.VITE_APP_REST_API_KEY;
  const kakaoRedirectUri = import.meta.env.VITE_APP_REDIRECT_URI;

  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}&response_type=code`;
    window.open(kakaoAuthUrl, "_blank", "noopener,noreferrer");
  };

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage(
        "닉네임 또는 비밀번호가 잘못되었습니다. 닉네임과 비밀번호를 정확히 입력해 주세요."
      );
    } else {
      setErrorMessage("");
      // 여기서 서버로 로그인 요청을 보낼 수 있습니다.
    }
  };

  return (
    <>
      <PageStyle />
      <Container>
        <Link to="/">
          <Header>MOHAE</Header>
        </Link>
        <P1>
          모해 <span>MOHAE</span> 서비스
        </P1>
        <UnderText>
          모해(MOHAE)는 ‘엄마, 아빠 그리고 나’ 일상을 보다 더 건강하고 의미있게
          맺어주는 플랫폼입니다.
          <br />
          가족의 일상에 더욱 관심을 가지고 표현하기 어려웠던 생각과 마음을
          나누어봅시다!
        </UnderText>
        <Nemo>
          <Form>
            <First>로그인 모해?</First>
            <Flex>
              <Label>아이디</Label>
              <InputWrapper>
                <Input
                  type="text"
                  placeholder="아이디 입력"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </InputWrapper>
            </Flex>

            <Flex>
              <Label>비밀번호</Label>
              <InputWrapper>
                <Input
                  type="password"
                  placeholder="비밀번호 입력"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputWrapper>
            </Flex>

            {errorMessage && <Error>{errorMessage}</Error>}

            <CheckboxLabel>
              <Checkbox type="checkbox" /> 로그인 유지
            </CheckboxLabel>

            <ButtonContainer>
              <Button onClick={handleLogin} disabled={!username || !password}>
                {" "}
                로그인{" "}
              </Button>
              <Link to="/Signup">
                <Button1> 회원가입 </Button1>
              </Link>
              <Find> 아이디 / 비밀번호 찾기</Find>
              <KAKAO>- SNS 로그인 -</KAKAO>
              <KakakoButton onClick={handleKakaoLogin}>
                <FontAwesomeIcon icon={faComment} />
                카카오 로그인
              </KakakoButton>
            </ButtonContainer>
          </Form>
        </Nemo>
      </Container>
    </>
  );
};

export default Login;
