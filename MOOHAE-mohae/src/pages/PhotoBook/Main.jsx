import React, { useState } from "react";
import * as S from "./styled";

const BookLayout = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "왼쪽 페이지 제목",
      content: "왼쪽 페이지 내용...",
    },
    {
      title: "오른쪽 페이지 제목",
      content: "오른쪽 페이지 내용...",
    },
    // 추가 페이지를 여기에 추가
  ];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
  };

  return (
    <S.Overlay>
      <S.Modal>
        <S.Arrow onClick={handlePrevPage}>&#9664;</S.Arrow>
        <S.Book>
          <S.Page>
            <S.PageContent>
              <h1>{pages[currentPage].title}</h1>
              <p>{pages[currentPage].content}</p>
            </S.PageContent>
          </S.Page>
          <S.Spine />
          <S.Page>
            <S.PageContent>
              <h1>{pages[(currentPage + 1) % pages.length].title}</h1>
              <p>{pages[(currentPage + 1) % pages.length].content}</p>
            </S.PageContent>
          </S.Page>
        </S.Book>
        <S.Arrow onClick={handleNextPage}>&#9654;</S.Arrow>
      </S.Modal>
    </S.Overlay>
  );
};

export default BookLayout;
