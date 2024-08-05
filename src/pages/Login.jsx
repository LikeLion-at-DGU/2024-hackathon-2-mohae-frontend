import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { API } from "../api";

const PageStyle = createGlobalStyle`
  body {
    background-color: #F7F8FB;
    margin: 0;
    padding: 0;
    display: flex;
    width: 1440px;
    justify-content: center;
    align-items: center;
    height: fit-content;
    @media (max-width: 359px) {
      background-color: #F7F8FB;
      margin: 0;
      padding: 0;
      display: flex;
      width: 360px;
      justify-content: center;
      align-items: center;
      height: fit-content;
    }
  }
`;

export const BackEffect = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 11rem;
  width: 130%;
  height: 100%;
  align-items: center;
  background: linear-gradient(120deg, #e1eaff 0%, #fff 52.4%, #dcfafc 100%);

  @media (max-width: 359px) {
    width: 105%;
    padding-top: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* 원래 텍스트 색상을 유지 */

  &:hover {
    text-decoration: none;
  }
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;

  @media (max-width: 359px) {
    padding: 0;
  }
`;

const MOHAEsytle = styled.h1`
  color: #2d539e;
  text-align: center;
  font-family: "Cafe24 Meongi B";
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 4rem;

  @media (max-width: 359px) {
    font-size: 1.5rem;
    height: 0.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 359px) {
    width: 300px;
    padding: 10px;
    justify-content: center;
  }
`;

const Header = styled.h1`
  color: #2a82da;
  margin-bottom: 20px;
  font-family: "Cafe24 Meongi B";
  text-align: center;
`;

const UnderText = styled.p`
  color: #7a7a7a;
  text-align: center;
  font-family: "NanumSquare Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 10px 0px;
  @media (max-width: 359px) {
    font-size: 0.75rem;
    font-weight: 400;
  }
`;

const Nemo = styled.div`
  width: 636px;
  border-radius: 20px;
  background-color: inherit;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 359px) {
    width: calc(100%);
    padding: 20px;
    flex-shrink: 0;
    border-radius: 25px;
    background: #fff;
  }
`;

const First = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: #000;
  font-family: 'NanumSquareRound';
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 60px;
  @media (max-width: 359px) {
    flex-shrink: 0;
    color: #000;
    font-family: "NanumSquareRound";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 0.25rem;
  }
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
`;

const Label = styled.label`
  color: #000;
  text-align: left;
  font-family: 'NanumSquareRound';
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5px;
  width: 100px;
  @media (max-width: 359px) {
    align-self: stretch;
    color: #000;
    font-family: NanumSquareRound;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  margin-bottom: 20px;
  @media (max-width: 359px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 10px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 71px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 2px solid #ABABAB;

  background: #F7F8FB;


  @media (max-width: 359px) {
    width: 100%;
    height: 2.75rem;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-left: 1.25rem;

  color: #ABABAB;

  font-family: NanumSquareRound;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  border: none;
  outline: none;
  background-color: inherit;

  @media (max-width: 359px) {
    font-size: 1rem;
  }
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

  @media (max-width: 359px) {
    margin-top: 0.625rem;
  }
`;

const Button = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: #2d539e;

  color: #fff;
  font-family: "NanumSquareRound;";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  border: none;
  padding: 1rem 4rem;
  gap: 5px;

  &:hover {
    background-color: #1d3e7f;
  }

  @media (max-width: 359px) {
    font-size: 1rem;
    padding: 0.375rem 3rem;
    width: 210px;
    height: 2rem;
    border-radius: 0.75rem;
  }
`;

const StyleLink = styled(Link)`
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: #fff;
  color: #2d539e;

  font-family: "NanumSquareRound;";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  cursor: pointer;
  border: none;
  padding: 1rem 4rem;
  gap: 5px;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 359px) {
    font-size: 1rem;
    padding: 0.375rem 3rem;
    width: 210px;
    height: 2rem;
    border-radius: 0.75rem;
  }
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

  @media (max-width: 359px) {
    font-size: 0.875rem;
    margin-top: 0.5rem;
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

  @media (max-width: 359px) {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }
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

  @media (max-width: 359px) {
    margin-top: 0.25rem;
    font-size: 0.75rem;
    height: 2rem;
    width: 10rem;
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

  const PostDateData = async () => {
    try {
      const eventData = {
        username,
        password,
      };

      // API 요청 보내기
      const response = await API.post("/accounts/login/", eventData);

      // 서버가 200 응답을 주면 로그인 성공
      if (response.status === 200) {
        // 로그인 성공 시 JWT 토큰을 저장
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);

        alert("로그인 성공!");
        window.location.href = "/Homepage";
      } else {
        setErrorMessage(
          "로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요."
        );
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요."
      );
    }
  };

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
      <BackEffect>
        <Container>
          <Top>
            <StyledLink to="/">
              <MOHAEsytle>MOHAE</MOHAEsytle>
            </StyledLink>
          </Top>
          {/* <UnderText>
            모해(MOHAE)는 ‘엄마, 아빠 그리고 나’ 일상을 보다 더 건강하고 의미있게
            맺어주는 플랫폼입니다.
            <br />
            가족의 일상에 더욱 관심을 가지고 표현하기 어려웠던 생각과 마음을
            나누어봅시다!
          </UnderText> */}
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

              <ButtonContainer>
                <Button onClick={PostDateData} style={{border: '1px solid #fff'}} disabled={!username || !password}>
                  로그인
                </Button>
                <StyleLink to="/Signup" style={{border: '1px solid #2d539e'}}>
                  회원가입
                </StyleLink>
                {/* <Find>아이디 / 비밀번호 찾기</Find>
                <KAKAO>- SNS 로그인 -</KAKAO>
                <KakakoButton onClick={handleKakaoLogin}>
                  <FontAwesomeIcon icon={faComment} />
                  카카오 로그인
                </KakakoButton> */}
              </ButtonContainer>
            </Form>
          </Nemo>
        </Container>
      </BackEffect>
    </>
  );
};

export default Login;