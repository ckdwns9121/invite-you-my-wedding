import { useState } from "react";
import styled from "styled-components";
import transferTime from "../../core/dateFormat";
import MuiButton from "@mui/material/Button/Button";
import ConfirmModal from "../Modal/ConfirmModal";

// todo 아이콘 넣기 react-icone ?? fontawesome?
export default function GuestBookList({ posts, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteGuestBookItem, setDeleteGuestBookItem] = useState(null);

  const handleClickModalOpen = (post) => {
    setDeleteGuestBookItem(post);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Flex>
        {posts.map((post) => (
          <GuestBookItem onClick={() => handleClickModalOpen(post)} key={post.id}>
            <ContentWrapper>
              <Text className="title">{post.title}</Text>
            </ContentWrapper>
            <DateWrapper>
              <Text className="date">{transferTime(new Date(post.date))}</Text>
              <Text className="author">From. {post.author}</Text>
            </DateWrapper>
          </GuestBookItem>
        ))}
      </Flex>
      <ConfirmModal
        fetchDeleteGuestBook={onDelete}
        isModalOpen={isModalOpen}
        handleCloseModal={() => {
          setIsModalOpen(false);
        }}
        guestBookItem={deleteGuestBookItem}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const DateWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GuestBookItem = styled(MuiButton)`
  @media (max-width: 414px) {
    width: 90%;
  }
  width: 85%;
  height: 100%;
  min-height: 34px;
  background-color: white !important;
  flex-direction: column;
  margin: 5px !important;
  padding: 8px !important;
  position: relative;
  justify-content: start !important;
  font-family: "GowunDodum-Regular" !important;
`;
const Text = styled.p`
  font-size: 1.2rem;
  color: #67676728;

  &.date {
    color: #848484;
    font-size: 1rem;
  }

  &.title {
    color: #333;
    text-align: start;
    word-break: break-all;
    padding: 0 !important;
  }

  &.author {
    color: #a9a9a9;
    font-size: 1.1rem;
  }
`;
