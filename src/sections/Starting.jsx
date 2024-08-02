import React, { useMemo } from "react";
import styled from "styled-components";

const OptimizedImage = React.memo(({ src, alt, ...props }) => <Image src={src} alt={alt} loading="lazy" {...props} />);

const OptimizedInviteText = React.memo(({ children, ...props }) => (
  <InviteText as="h1" {...props}>
    {children}
  </InviteText>
));

export default function Starting() {
  const imageUrl = useMemo(() => `${process.env.PUBLIC_URL}/image/main-card.webp`, []);

  return (
    <Container as="section" aria-label="웨딩 초대장 시작">
      <StyledWrapper>
        <OptimizedInviteText
          data-aos="fade-up"
          data-aos-delay="500"
          style={{ fontFamily: "yleeMortalHeart-ImmortalMemory" }}
        >
          Invite you
        </OptimizedInviteText>
        <Text as="p" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1500">
          소중한 당신을 초대합니다.
        </Text>
      </StyledWrapper>
      <ImgWrapper data-aos="flip-left" data-aos-delay="1000" data-aos-duration="1800">
        <OptimizedImage src={imageUrl} alt="신랑과 신부의 웨딩 사진" loading="lazy" />
      </ImgWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-top: 50px;
`;

const ImgWrapper = styled.div`
  @media (max-width: 290px) {
    height: 450px;
  }

  will-change: transform;
  margin-top: 10px;
  background-color: #f0ede6;
  align-items: start;
  justify-content: center;
  height: 520px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const InviteText = styled.p`
  font-size: 4rem;
  margin-top: 3rem;
  margin-bottom: 0;
  padding: 4px;

  font-weight: 500;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1.6rem;
  letter-spacing: -0.5px;
  margin-bottom: 48px;
`;

const StyledWrapper = styled(TextWrapper)``;
