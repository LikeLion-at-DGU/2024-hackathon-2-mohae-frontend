import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f8fb;
  box-shadow: 0px 4px 2px -2px gray;
`;

const Logo = styled.h1`
  font-family: "Cafe24 Meongi B";
  color: #2a82da;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  width: calc(33.333% - 20px);
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

const FooterButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #2a82da;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Gallery = () => {
  return (
    <Container>
      <Header>
        <Logo>MOHAE</Logo>
        <Nav>
          <NavLink href="#">일정</NavLink>
          <NavLink href="#">건강</NavLink>
          <NavLink href="#">가족 사진첩</NavLink>
          <NavLink href="#">문화생활</NavLink>
        </Nav>
        <NavLink href="#">로그인</NavLink>
      </Header>
      <Sidebar>
        <p>전체보기</p>
        <p>폴더별</p>
        <p>즐겨찾기</p>
      </Sidebar>
      <Content>
        <Card>카드 내용</Card>
        <Card>카드 내용</Card>
        <Card>카드 내용</Card>
        {/* 더 많은 카드들 */}
      </Content>
      <FooterButton>↑</FooterButton>
    </Container>
  );
};

export default Gallery;
