import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Flower } from "../styles";
import GuestBookList from "../components/GuestBook/GuestBookList";
import PostModal from "../components/Modal/PostModal";
import HeartIcon from "../components/Icons/Heart";
import { Pagination } from "@mui/material";
import { data } from "../configs/data";

const limit = 5;

export default function Posting() {
  const [postList, setPostList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const getGuestBooks = async () => {
    const datas = data;
    setCount(Math.ceil(datas.length / limit));
    setPostList(data);
  };

  const deleteGuestbook = async (id) => {
    alert("삭제 불가능한 게시물입니다.");
    getGuestBooks();
  };

  useEffect(() => {
    getGuestBooks();
  }, []);

  return (
    <Container as="section" aria-label="방명록">
      <Flex>
        <Flower src={`${process.env.PUBLIC_URL}/image/flower.png`} alt="장식용 꽃 이미지" className="f-t" />
        <TextWrapper>
          <Text>
            신랑
            <HeartIcon aria-hidden="true" />
            신부에게 축하글을 남겨주세요.
          </Text>
          <GoToWriteButton onClick={() => setIsModalOpen(true)} aria-label="축하글 쓰기">
            축하글 쓰기💐
          </GoToWriteButton>
        </TextWrapper>
        <GuestBookList
          posts={postList.slice((currentPage - 1) * limit, currentPage * limit)}
          onDelete={deleteGuestbook}
        />
        <Pagination count={count} page={currentPage} onChange={handleChange} aria-label="방명록 페이지 네비게이션" />
        <Flower src={`${process.env.PUBLIC_URL}/image/flower.png`} alt="장식용 꽃 이미지" className="f-b" />
      </Flex>
      <PostModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} aria-labelledby="post-modal-title" />
    </Container>
  );
}

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0ede6;
`;

const GoToWriteButton = styled.button`
  border-radius: 10px;
  padding: 3px 10px;
  background-color: #797676;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  margin-left: auto;
  cursor: pointer;
  border: none;
  font-size: 1.2rem;

  &:hover,
  &:focus {
    background-color: #595959;
  }

  @media (max-width: 414px) {
    font-size: 1.2rem;
    padding: 3px 6px;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
    padding: 1px 4px;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
    padding: 3px 6px;
  }
  @media (max-width: 320px) {
    font-size: 1.1rem;
    padding: 3px 6px;
  }
  @media (max-width: 290px) {
    font-size: 1.2rem;
    padding: 1px 4px;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 414px) {
    font-size: 1.3rem;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.3rem;
  }
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
  @media (max-width: 290px) {
    font-size: 1.2rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  width: 85%;
  margin-bottom: 10px;
  z-index: 10;

  @media (max-width: 430px) {
    width: 27.5rem;
  }
  @media (max-width: 414px) {
    width: 29.5rem;
  }
  @media (max-width: 393px) {
    width: 27rem;
  }
  @media (max-width: 375px) {
    width: 29.5rem;
  }
`;
