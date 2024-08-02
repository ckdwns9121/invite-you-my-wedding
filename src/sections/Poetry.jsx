import React, { useMemo } from "react";
import Button from "../components/Button/Button";
import styled from "styled-components";
import { Flower } from "../styles";
import { useSetRecoilState } from "recoil";
import modalState from "../store/infoModal";

export default function Poetry() {
  const setModalState = useSetRecoilState(modalState);

  const imageUrl = useMemo(() => `${process.env.PUBLIC_URL}/image/form-background.png`, []);

  return (
    <Container as="section" aria-label="웨딩 초대장 인사말">
      <FormWrapper data-aos="flip-left" data-aos-delay="300" data-aos-duration="1200">
        <BackgroundImage src={imageUrl} alt="웨딩 초대장 배경 이미지" />
        <Flower className="f-t" src={`${process.env.PUBLIC_URL}/image/flower.png`} alt="장식용 꽃 이미지" />
        <TextWrapper className="align-l">
          <Text as="p">유월의 어느 초여름,</Text>
          <Text as="p">늘 곁에서 아껴주셨던 고마운 분들을 모십니다.</Text>
          <Text as="p">있는 그대로 사랑하고</Text>
          <Text as="p">서로의 존재를 감사하며</Text>
          <Text as="p">인연이었던 저희 두 사람</Text>
          <Text as="p">같이 있으면 기분 좋아지는 그대와 함께</Text>
          <Text as="p">인생의 길을 걸어가겠습니다.</Text>
        </TextWrapper>
        <Flower className="f-b" src={`${process.env.PUBLIC_URL}/image/flower.png`} alt="장식용 꽃 이미지" />
      </FormWrapper>
      <FormWrapper className="w1">
        <TextRowWrapper data-aos="fade-up" data-aos-delay="300">
          <TextWrapper className="alignt-l">
            <Text as="p" className="t1">
              소영식·박숙녀의 아들
            </Text>
            <Text as="p" className="t1">
              권태건·마은영의 딸
            </Text>
          </TextWrapper>
          <TextWrapper className="align-r">
            <Text as="p" className="t2">
              종범
            </Text>
            <Text as="p" className="t2">
              유정
            </Text>
          </TextWrapper>
        </TextRowWrapper>
        <Button
          onClick={() => setModalState(true)}
          data-aos="fade-up"
          data-aos-delay="200"
          aria-label="신랑신부에게 연락하기"
        >
          연락하기
        </Button>
      </FormWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  &.w1 {
    margin: 42px;
    background-color: #ffff;
  }
  will-change: transform;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextRowWrapper = styled.div`
  will-change: transform;

  @media (max-width: 393px) {
    width: 18rem;
  }
  @media (max-width: 360px) {
    width: 85%;
  }
  @media (max-width: 290px) {
    width: 85%;
  }
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 35px;
  padding: 10px 5px;
  border-bottom: solid 1px #e6d6d6;
  border-top: solid 1px #e6d6d6;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  z-index: -9999;
`;

const Text = styled.span`
  @media (max-width: 414px) {
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
  @media (max-width: 290px) {
    font-size: 1.4rem;
  }
  font-size: 1.25rem;
  margin: 2px;
  width: 100%;
  text-align: center;
  &.t1 {
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    @media (max-width: 375px) {
      font-size: 1.5rem;
    }
    @media (max-width: 290px) {
      font-size: 1.4rem;
    }
    font-size: 1.3rem;
    text-align: left;
  }
  &.t2 {
    @media (max-width: 414px) {
      font-size: 1.6rem;
    }
    display: flex;
    margin-left: 15px;
    font-size: 1.5rem;
  }
`;
