import React from "react";
import styled from "styled-components";

export default function Poster() {
  return (
    <Container as="section" aria-label="결혼식 포스터">
      <ImageWrapper>
        <RightTextBox aria-hidden="true">
          <Text as="span">종범</Text>
          <Text as="span">유정</Text>
        </RightTextBox>
        <Image
          src={`${process.env.PUBLIC_URL}/image/poster-image.jpeg`}
          alt="종범과 유정의 결혼식 포스터 배경 이미지"
          loading="lazy"
        />
        <Absolute>
          <Text as="h1" className="f6">
            Yujeong & Jongbum
          </Text>
          <Text as="p">창원 힐스카이웨딩 10층 힐그랜드홀</Text>
          <Text as="time" dateTime="2024-06-02T12:10:00" className="f3">
            2024.06.02 Jun 12:10
          </Text>
        </Absolute>
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  vertical-align: bottom;
`;

const Absolute = styled.div`
  position: absolute;
  bottom: 22px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5); // 텍스트 가독성을 위한 배경 추가
  padding: 10px 0;

  @media (max-width: 430px) {
    bottom: 2px;
  }
  @media (max-width: 414px) {
    bottom: 4px;
  }
  @media (max-width: 375px) {
    bottom: 8px;
  }
  @media (max-width: 360px) {
    bottom: 12px;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: #fff;
  margin: 5px 0;

  &.f6 {
    font-family: "yleeMortalHeart-ImmortalMemory", sans-serif;
    font-size: 6rem;
    margin-bottom: 10px;

    @media (max-width: 430px) {
      font-size: 5rem;
      margin-bottom: 2px;
    }
    @media (max-width: 414px) {
      font-size: 5rem;
      margin-bottom: 2px;
    }
    @media (max-width: 412px) {
      font-size: 5.2rem;
    }
    @media (max-width: 393px) {
      font-size: 4.8rem;
      margin-bottom: 1px;
    }
    @media (max-width: 375px) {
      font-size: 5.2rem;
      margin-bottom: 2px;
    }
    @media (max-width: 360px) {
      font-size: 4.7rem;
    }
  }

  &.f3 {
    font-family: "yleeMortalHeart-ImmortalMemory", sans-serif;
    font-size: 3rem;

    @media (max-width: 430px) {
      font-size: 2.7rem;
    }
    @media (max-width: 412px) {
      font-size: 2.8rem;
    }
    @media (max-width: 393px) {
      font-size: 2.3rem;
    }
    @media (max-width: 375px) {
      font-size: 2.8rem;
    }
    @media (max-width: 360px) {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 430px) {
    font-size: 1.6rem;
  }
  @media (max-width: 412px) {
    font-size: 1.6rem;
  }
  @media (max-width: 393px) {
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.6rem;
  }
  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
`;

const RightTextBox = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: right;
  flex-direction: column;
  margin-left: -5%;
  margin-top: 5%;
`;
