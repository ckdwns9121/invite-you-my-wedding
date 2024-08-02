import React from "react";
import styled from "styled-components";
import { EmptyBox, Flex } from "../styles";
import HeartIcon from "../components/Icons/Heart";
import { TheTimes } from "../components/DdayCount";

export default function CalendarSection() {
  return (
    <Container as="section" aria-label="웨딩 일정 및 카운트다운">
      <Flex>
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          <Text as="time" dateTime="2024-06-02T12:10:00+09:00">
            2024년 6월 2일
          </Text>
          <Text as="time" dateTime="2024-06-02T12:10:00+09:00">
            오후 12시 10분
          </Text>
          <Text>창원 힐스카이 10층 힐그랜드홀</Text>
        </TextWrapper>
        <EmptyBox />
        <Image
          src={`${process.env.PUBLIC_URL}/image/calendar.png`}
          alt="2024년 6월 2일이 표시된 캘린더 이미지"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
        />
        <TextWrapper data-aos="zoom-in-up" data-aos-delay="100">
          <CountdownText aria-label="신랑 신부 이름">
            종범
            <HeartIcon aria-hidden="true" />
            유정
          </CountdownText>
          <Flex>
            <TheTimes targetDate={new Date(2024, 5, 2, 12, 10)} aria-label="결혼식까지 남은 시간" />
          </Flex>
        </TextWrapper>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-top: 48px;
  padding-bottom: 84px;
`;

const TextWrapper = styled.div`
  position: relative;
`;

const Text = styled.p`
  @media (max-width: 414px) {
    font-size: 1.5rem;
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountdownText = styled(Text)`
  padding-top: 12px;
  padding-bottom: 4px;
`;

const Image = styled.img`
  margin-bottom: 50px;
  width: 75%;
  will-change: transform;
`;
