import { useEffect, useState } from "react";

// style

import styled from "styled-components";
import { Container, Flower } from "../styles";

// component

import GuestBookList from "../components/GuestBook/GuestBookList";
import PostModal from "../components/Modal/PostModal";
import HeartIcon from "../components/Icons/Heart";

// mui
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
    alert("삭제 붙가한 게시물입니다.");
    getGuestBooks();
  };

  useEffect(() => {
    getGuestBooks();
  }, []);

  return (
    <>
      <Container>
        <Flex>
          <Flower src={`${process.env.PUBLIC_URL}/image/flower.png`} className="f-t" />
          <TextWrapper>
            <Text>
              신랑
              <HeartIcon />
              신부에게 축하글을 남겨주세요.
            </Text>
            <GoToWriteButton
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              축하글 쓰기💐
            </GoToWriteButton>
          </TextWrapper>
          <GuestBookList
            posts={postList.slice((currentPage - 1) * limit, currentPage * limit)}
            onDelete={deleteGuestbook}
          />
          <Pagination count={count} page={currentPage} onChange={handleChange} />
          <Flower src={`${process.env.PUBLIC_URL}/image/flower.png`} className="f-b" />
        </Flex>
      </Container>
      <PostModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </>
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

const GoToWriteButton = styled.div`
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
  border-radius: 10px;
  padding: 3px 10px;
  background-color: #797676;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  margin-left: auto;

  cursor: pointer;
`;

const Text = styled.p`
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

  font-size: 1.2rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
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
  display: flex;
  width: 85%;
  margin-bottom: 10px;
  z-index: 10;
`;
