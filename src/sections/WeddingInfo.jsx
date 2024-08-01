import { useState } from "react";
import styled from "styled-components";
import AccountModal from "../components/Modal/AccountModal";

export default function WeddingInfo() {
  const [active1, setActive1] = useState(false);
  const active2 = true;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBride, setIsBride] = useState(true);
  return (
    <>
      <AccountModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isBride={isBride} />
      <Container data-aos="fade-up" data-aos-duration="800">
        <Flex>
          <InfoWrapper className={active2 ? "active2" : "disable"}>
            <AbsoluteLine />
            <Box>
              <Triangle className={active2 ? "active" : ""} />

              <Text className="info-title">마음 전하실 곳</Text>
            </Box>
            <TextWrapper className={active2 ? "active2" : "disable"}>
              <Flex>
                <Text className="top-t">비대면으로 축하를 전하고자</Text>
                <Text>하시는 분들을 위해</Text>
                <Text>계좌 번호를 기재하였습니다.</Text>
                <Text>너그러운 마음으로 양해 부탁드리겠습니다.</Text>
              </Flex>
              <Box className="box">
                <ItemBox
                  className="b-box"
                  onClick={() => {
                    setIsBride(false);
                    setIsModalOpen(true);
                  }}
                >
                  <Text className="t1">신랑측</Text>
                  <Text className="t1">축하 송금 안내</Text>
                </ItemBox>
                <ItemBox
                  className="p-box"
                  onClick={() => {
                    setIsBride(true);
                    setIsModalOpen(true);
                  }}
                >
                  <Text className="t1">신부측</Text>
                  <Text className="t1">축하 송금 안내</Text>
                </ItemBox>
              </Box>
            </TextWrapper>
          </InfoWrapper>
          <InfoWrapper className={active1 ? "active1" : "disable"} onClick={() => setActive1((prev) => !prev)}>
            <AbsoluteLine />
            <Box>
              <Triangle className={active1 ? "active" : ""} />
              <Text className="info-title">축하 화환 보내기</Text>
            </Box>
            <TextWrapper className={active1 ? "active1" : "disable"}>
              <Flex>
                <TextWrapper>
                  <Text className="t-info">신랑, 신부의 결혼을 축하해주세요.</Text>
                  <Text className="t-info">예식일에 맞춰 웨딩홀로 배송됩니다.</Text>
                  <WrapperInfo>
                    <Text className="t-info">자세한 안내는</Text>
                    <Text className="t-info">아래 힐스카이플라워 측으로</Text>
                    <Text className="t-info">문의 부탁드립니다.</Text>
                  </WrapperInfo>
                  <WrapperNumber>
                    <Text onClick={() => (window.document.location.href = "tel:010-3836-9782")}>📞 010-3836-9782</Text>
                    <Text onClick={() => (window.document.location.href = "tel:010-3221-9782")}>📞 010-3221-9782</Text>
                  </WrapperNumber>
                  <Text className="t-info">전화번호를 누르시면 연락처로 연결됩니다.</Text>
                </TextWrapper>
              </Flex>
            </TextWrapper>
          </InfoWrapper>
          <Line />
        </Flex>
      </Container>
    </>
  );
}

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  padding-bottom: 80px;
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
  font-size: 1.3rem;
  &.t1 {
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    @media (max-width: 375px) {
      font-size: 1.4rem;
    }
    font-size: 1.5rem;
  }
  &.info-title {
    margin: 10px;
  }
  &.top-t {
    margin-top: 20px;
  }
`;

const TextWrapper = styled.div`
  &.active {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &.disable {
    display: none;
  }
`;
const InfoWrapper = styled.div`
  position: relative;
  width: 100%;

  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &.active1 {
    @media (max-width: 430px) {
      height: 285px;
    }
    @media (max-width: 414px) {
      height: 315px;
    }
    @media (max-width: 375px) {
      height: 280px;
    }
    @media (max-width: 360px) {
      height: 235px;
    }
    @media (max-width: 290px) {
      height: 250px;
    }
    height: 250px;
    cursor: pointer;
  }
  &.active2 {
    @media (max-width: 430px) {
      height: 310px;
    }
    @media (max-width: 414px) {
      height: 305px;
    }
    @media (max-width: 375px) {
      height: 260px;
    }
    @media (max-width: 360px) {
      height: 265px;
    }
    @media (max-width: 280px) {
      height: 245px;
    }
    height: 240px;
    transition: all 0.8s ease-in-out;
  }
  &.disable {
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    height: 45.5px;
  }
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: calc(6px * 1.732) solid #666666;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  margin-right: 3px;

  &.active {
    transform: rotate(180deg);
  }

  transition: all 0.3s ease-in-out;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const Line = styled.div`
  height: 1px;
  width: 50%;
  background-color: #e6d6d6;
`;

const AbsoluteLine = styled(Line)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e6d6d6;
`;
const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 0.3em #67676728;

  &.b-box {
    background-color: #81b4ef;
    cursor: pointer;
  }

  &.p-box {
    background-color: #f3cedb;
    cursor: pointer;
  }
`;
