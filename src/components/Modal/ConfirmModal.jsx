import styled from "styled-components";
import Button from "../Button/Button";
import { Dimed } from "./ConnectInfoModal";
import TextInput from "../Input/TextInput";
import { useState, useEffect } from "react";

import ReactDom from "react-dom";

const ConfirmModal = ({ fetchDeleteGuestBook, isModalOpen, handleCloseModal, guestBookItem }) => {
  const [password, setPassword] = useState("");
  const [element, setElement] = useState(null);

  const onDeleteGuestBook = () => {
    alert("삭제 불가능한 게시글");
    return;

    // if (password !== guestBookItem.password) {
    //   alert("비밀번호가 틀립니다");
    //   return;
    // }
    // notify();
    // fetchDeleteGuestBook(guestBookItem.id);

    // setTimeout(() => {
    //   handleCloseModal();
    // }, 300);
  };

  useEffect(() => {
    setElement(document.getElementById("modal"));
  }, []);

  if (!isModalOpen) return null;
  if (!element) return <></>;

  return ReactDom.createPortal(
    <>
      <Container className={isModalOpen ? "" : "disabled"}>
        <Header>
          <HeaderText>삭제하시겠습니까?</HeaderText>
        </Header>
        <Wrapper>
          <TextWrapper>
            <TextInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label={"작성 시 입력하신 비밀번호를 입력해주세요."}
            />
          </TextWrapper>
          <ButtonWrapper>
            <Button className="button point" onClick={onDeleteGuestBook}>
              삭제
            </Button>
            <Button className="button" onClick={handleCloseModal}>
              닫기
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </Container>
      <Dimed isOpen={isModalOpen} onClick={handleCloseModal} />
    </>,
    element
  );
};

const Container = styled.div`
  @media (max-width: 430px) {
    width: 400px;
    border-radius: 10px;
  }
  @media (max-width: 393px) {
    width: 27rem;
  }
  @media (max-width: 390px) {
    width: 320px;
  }
  @media (max-width: 375px) {
    width: 310px;
  }
  @media (max-width: 320px) {
    width: 28rem;
  }
  @media (max-width: 360px) {
    width: 340px;
    border-radius: 8px;
  }
  @media (max-width: 320px) {
    width: 34rem;
  }
  @media (max-width: 290px) {
    width: 265px;
  }

  position: fixed;
  background-color: #fff;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 11;
  width: 368px;
  min-height: 148px;
  border-radius: 15px;

  overflow: hidden;

  margin: 0 auto;
  &.disable {
    display: none;
  }
  box-shadow: 2px 3px 3px 0.2em #67676728;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const Wrapper = styled.div`
  @media (max-width: 430px) {
    padding-top: 24px;
    padding-bottom: 20px;
  }

  @media (max-width: 375px) {
    padding-top: 0px;
    padding-bottom: 20px;
  }
  @media (max-width: 320px) {
  }

  @media (max-width: 290px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 16px;

  padding-top: 24px;
  padding-bottom: 24px;
  box-sizing: border-box;

  .button {
    height: 32px;
    min-width: 72px !important;
    padding: 0;
    margin-left: 8px;
  }
`;

const Header = styled.div`
  @media (max-width: 430px) {
    margin-top: 30px;
    padding-bottom: 8px;
  }
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
`;

const HeaderText = styled.p`
  @media (max-width: 430px) {
    font-size: 1.3rem;
  }
  @media (max-width: 375px) {
    font-size: 1.4rem;
    margin-bottom: 16px;
  }

  font-size: 1.2rem;
`;
const TextWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 24px 0;
`;

export default ConfirmModal;
