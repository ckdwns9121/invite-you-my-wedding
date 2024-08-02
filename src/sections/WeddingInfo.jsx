import React, { useState } from "react";
import styled from "styled-components";
import AccountModal from "../components/Modal/AccountModal";

export default function WeddingInfo() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBride, setIsBride] = useState(true);

  const toggleSection = (setter) => () => setter((prev) => !prev);

  return (
    <Container as="section" aria-label="웨딩 정보" data-aos="fade-up" data-aos-duration="800">
      <AccountModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isBride={isBride} />
      <Flex>
        <InfoWrapper>
          <AbsoluteLine />
          <ToggleButton onClick={toggleSection(setActive2)} aria-expanded={active2} aria-controls="gift-section">
            <Triangle $isActive={active2} aria-hidden="true" />
            <Text as="h2">마음 전하실 곳</Text>
          </ToggleButton>
          <TextWrapper id="gift-section" $isActive={active2}>
            <Flex>
              <Text>비대면으로 축하를 전하고자 하시는 분들을 위해</Text>
              <Text>계좌 번호를 기재하였습니다.</Text>
              <Text>너그러운 마음으로 양해 부탁드리겠습니다.</Text>
            </Flex>
            <Box>
              <GiftButton
                onClick={() => {
                  setIsBride(false);
                  setIsModalOpen(true);
                }}
                aria-label="신랑측 축하 송금 안내 열기"
              >
                <Text>신랑측</Text>
                <Text>축하 송금 안내</Text>
              </GiftButton>
              <GiftButton
                onClick={() => {
                  setIsBride(true);
                  setIsModalOpen(true);
                }}
                aria-label="신부측 축하 송금 안내 열기"
              >
                <Text>신부측</Text>
                <Text>축하 송금 안내</Text>
              </GiftButton>
            </Box>
          </TextWrapper>
        </InfoWrapper>
        <InfoWrapper>
          <AbsoluteLine />
          <ToggleButton onClick={toggleSection(setActive1)} aria-expanded={active1} aria-controls="flower-section">
            <Triangle $isActive={active1} aria-hidden="true" />
            <Text as="h2">축하 화환 보내기</Text>
          </ToggleButton>
          <TextWrapper id="flower-section" $isActive={active1}>
            <Flex>
              <Text>신랑, 신부의 결혼을 축하해주세요.</Text>
              <Text>예식일에 맞춰 웨딩홀로 배송됩니다.</Text>
              <WrapperInfo>
                <Text>자세한 안내는 아래 힐스카이플라워 측으로 문의 부탁드립니다.</Text>
              </WrapperInfo>
              <WrapperNumber>
                <PhoneLink href="tel:010-3836-9782" aria-label="010-3836-9782 전화 걸기">
                  📞 010-3836-9782
                </PhoneLink>
                <PhoneLink href="tel:010-3221-9782" aria-label="010-3221-9782 전화 걸기">
                  📞 010-3221-9782
                </PhoneLink>
              </WrapperNumber>
              <Text>전화번호를 누르시면 연락처로 연결됩니다.</Text>
            </Flex>
          </TextWrapper>
        </InfoWrapper>
        <Line />
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-bottom: 80px;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const WrapperNumber = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 17px;
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 17px;
`;

const Text = styled.p`
  font-size: 1.3rem;
  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
  @media (max-width: 393px) {
    font-size: 1.3rem;
  }
  @media (max-width: 390px) {
    font-size: 1.5rem;
  }
  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
  @media (max-width: 290px) {
    font-size: 1.6rem;
  }
`;

const TextWrapper = styled.div`
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const Triangle = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: calc(6px * 1.732) solid #666666;
  margin-right: 10px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.$isActive ? "rotate(180deg)" : "rotate(0)")};
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.3rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;

const Line = styled.hr`
  width: 50%;
  border: none;
  border-top: 1px solid #e6d6d6;
  margin: 20px 0;
`;

const AbsoluteLine = styled(Line)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GiftButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 15px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 0.3em #67676728;
  cursor: pointer;
  background-color: ${(props) => (props.children[0].props.children === "신랑측" ? "#81b4ef" : "#f3cedb")};
  color: #000; // Ensure text is visible on colored backgrounds
`;

const PhoneLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
