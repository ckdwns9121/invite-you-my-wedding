import styled from "styled-components";
import { useRecoilState } from "recoil";
import infoModalState from "../../store/infoModal";
import "react-toastify/dist/ReactToastify.css";

export default function ConnectInfoModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(infoModalState);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (typeof window !== "object") {
    return <></>;
  }

  return (
    <>
      <Container className={isModalOpen ? "" : "disable"}>
        <Flex>
          <H1Text>마음 전하는 곳💐</H1Text>
          <GuideWrapper>
            <NameWrapper>
              *<CallingBox>축하 전화하기📞</CallingBox> <GuideText>를 누르면 전화번호부로 연결됩니다. </GuideText>
            </NameWrapper>
            <NameWrapper>
              *<MessageBox>축하 메시지 ✉️</MessageBox>
              <GuideText>를 누르면 문자 메시지로 연결됩니다.</GuideText>
            </NameWrapper>
          </GuideWrapper>
          <NameListWrapper>
            <Text className="h2">신랑💍신부</Text>
            <NameWrapper>
              <Text>신랑 </Text> <B>소종범</B>
              <CallingBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
            <NameWrapper>
              <Text>신부 </Text> <B>권유정</B>
              <CallingBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
          </NameListWrapper>
          <NameListWrapper>
            <NameWrapper>
              <Text className="h2 blue">신랑</Text>
              <Text className="h2 ">혼주측</Text>
            </NameWrapper>

            <NameWrapper>
              <Text>신랑 아버지 </Text> <B>소영식</B>
              <CallingBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
            <NameWrapper>
              <Text>신랑 어머니 </Text> <B>박숙녀</B>
              <CallingBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
          </NameListWrapper>
          <NameListWrapper>
            <NameWrapper>
              <Text className="h2 pink">신부</Text>
              <Text className="h2 ">혼주측</Text>
            </NameWrapper>

            <NameWrapper>
              <Text>신부 아버지 </Text> <B>권태건</B>
              <CallingBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
            <NameWrapper>
              <Text>신부 어머니 </Text> <B>마은영</B>
              <CallingBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 전화하기📞</CallingBox>
              <MessageBox onClick={() => alert("현재 완료된 이벤트입니다.")}>축하 메시지 ✉️</MessageBox>
            </NameWrapper>
          </NameListWrapper>
          <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
        </Flex>
      </Container>
      <Dimed className={isModalOpen ? "" : "disable"} onClick={handleCloseModal} />
    </>
  );
}
const NameListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;
const Text = styled.p`
  @media (min-width: 399px) {
    font-size: 1.2rem;
  }
  @media (max-width: 398px) {
    font-size: 1.2rem;
  }
  @media (max-width: 394px) {
    font-size: 1.2rem;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
  @media (max-width: 358px) {
    font-size: 1.25rem;
  }
  @media (max-width: 318px) and(min-width: 317px) {
    font-size: 1.3rem;
  }
  @media (max-width: 290px) {
    font-size: 1.2rem;
  }
  @media (max-width: 280px) {
    font-size: 1.1rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }

  font-size: 1.1rem;

  &.h2 {
    @media (min-width: 399px) {
      font-size: 1.2rem;
    }
    @media (max-width: 393px) {
      font-size: 1.1rem;
    }
    @media (max-width: 375px) {
      font-size: 1.1rem;
    }
    @media (max-width: 360px) {
      font-size: 1.2rem;
    }
    @media (max-width: 290px) {
      font-size: 1.1rem;
    }
    @media (max-width: 274px) {
      font-size: 1rem;
    }
    font-size: 1rem;
    color: #5e5d5d;
  }

  &.blue {
    @media (min-width: 399px) {
      font-size: 1.3rem;
    }
    @media (max-width: 375px) {
      font-size: 1.3rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
    @media (max-width: 290px) {
      font-size: 1.2rem;
    }
    @media (max-width: 274px) {
      font-size: 1rem;
    }
    color: #5baddc;
    font-weight: 600;
  }
  &.pink {
    @media (min-width: 399px) {
      font-size: 1.3rem;
    }
    @media (max-width: 375px) {
      font-size: 1.3rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
    @media (max-width: 290px) {
      font-size: 1.2rem;
    }
    @media (max-width: 274px) {
      font-size: 1rem;
    }
    color: #f8acb9;
    font-weight: 600;
  }
`;

const H1Text = styled(Text)`
  @media (max-width: 375px) {
    font-size: 1.7rem;
  }
  @media (max-width: 360px) {
    font-size: 2rem;
  }

  @media (max-width: 290px) {
    font-size: 1.7rem;
  }
  @media (max-width: 274px) {
    font-size: 1.5rem;
  }
  font-size: 1.7rem;
  font-weight: 600;
  color: #5e5e5e;
`;

const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const GuideText = styled.p`
  @media (min-width: 431px) {
    font-size: 1.1rem;
  }
  @media (max-width: 430px) {
    font-size: 1.15rem;
  }
  @media (max-width: 412px) {
    font-size: 1.2rem;
  }
  @media (max-width: 397px) {
    font-size: 1rem;
  }
  @media (max-width: 394px) {
    font-size: 1.1rem;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1.2rem;
    color: #000;
  }
  @media (max-width: 358px) {
    font-size: 1.2rem;
  }

  @media (max-width: 290px) {
    font-size: 1.2rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }
  color: #504f4f;
  font-size: 1rem;
`;

const B = styled.p`
  @media (min-width: 431px) {
    font-size: 1.2rem;
  }
  @media (max-width: 430px) {
    font-size: 1.2rem;
  }
  @media (max-width: 412px) {
    font-size: 1.2rem;
  }
  @media (max-width: 398px) {
    font-size: 1.2rem;
  }
  @media (max-width: 394px) {
    font-size: 1.2rem;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1.3rem;
  }
  @media (max-width: 358px) {
    font-size: 1.2rem;
  }
  @media (max-width: 356px) {
    font-size: 1.2rem;
  }
  @media (max-width: 318px) and(min-width: 317px) {
    font-size: 1.3rem;
  }
  @media (max-width: 290px) {
    font-size: 1.2rem;
  }
  @media (max-width: 280px) {
    font-size: 1.2rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }

  font-size: 1rem;
  font-weight: 600;
`;

const MessageBox = styled.div`
  @media (min-width: 413px) {
    font-size: 1.1rem;
  }
  @media (max-width: 412px) {
    font-size: 1rem;
  }
  @media (max-width: 397px) {
    font-size: 1rem;
  }
  @media (max-width: 394px) {
    font-size: 1rem;
  }
  @media (max-width: 393px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }
  @media (max-width: 360px) {
    font-size: 1rem;
  }
  @media (max-width: 358px) {
    font-size: 1rem;
  }
  @media (max-width: 356px) {
    font-size: 1rem;
  }
  @media (max-width: 290px) {
    font-size: 1rem;
  }
  @media (max-width: 280px) {
    font-size: 1rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }
  font-size: 1rem;
  border-radius: 5px;
  background-color: #f7deabac;
  padding: 2px 5px;
  cursor: pointer;
`;

const CallingBox = styled.div`
  @media (min-width: 413px) {
    font-size: 1.1rem;
  }
  @media (max-width: 412px) {
    font-size: 1rem;
  }
  @media (max-width: 397px) {
    font-size: 1rem;
  }
  @media (max-width: 394px) {
    font-size: 1rem;
  }
  @media (max-width: 393px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
  @media (max-width: 358px) {
    font-size: 1rem;
  }
  @media (max-width: 356px) {
    font-size: 1rem;
  }
  @media (max-width: 290px) {
    font-size: 1rem;
  }
  @media (max-width: 280px) {
    font-size: 1.1rem;
  }
  @media (max-width: 274px) {
    font-size: 1rem;
  }
  @media (max-width: 239px) {
    font-size: 0.7rem;
  }
  font-size: 1rem;
  border-radius: 5px;
  background-color: #9ad49b81;
  padding: 2px 3px;
  cursor: pointer;
  &.onebtn {
    text-align: center;
    width: 137px;
  }
`;

export const Dimed = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.3;
  display: block;

  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  width: 100%;
  max-width: 435px;

  &.disable {
    display: none;
  }
`;

export const Flex = styled.div`
  @media (min-width: 413px) {
    width: 90%;
  }
  @media (max-width: 412px) {
    width: 28rem;
  }
  @media (max-width: 393px) {
    width: 27rem;
  }
  @media (max-width: 390px) {
    width: 28rem;
  }
  @media (max-width: 375px) {
    width: 30rem;
  }
  @media (max-width: 360px) {
    width: 28rem;
  }
  @media (max-width: 358px) {
    width: 28rem;
  }
  @media (max-width: 356px) {
    width: 31rem;
  }
  @media (max-width: 318px) and(min-width: 317px) {
    width: 34rem;
  }
  @media (max-width: 290px) {
    width: 30rem;
    padding: 45px 10px 25px 10px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  height: 40%;
  border-radius: 12px;
  padding: 45px 14px 25px 14px;
  box-shadow: 2px 3px 3px 0.2em #67676728;
  gap: 30px;
`;

const CloseButton = styled.button`
  @media (max-width: 375px) {
    padding: 6px 8px;
  }

  &:hover {
    color: #9b9389;
    background-color: #b2aaa1;
  }
  border: none;
  border: 0px;
  background-color: #c8bbad;
  font-family: "GowunDodum-Regular";
  border-radius: 10px;
  padding: 8px 12px;
  width: 45%;
  color: #ffffff;
  font-size: 1.5rem;
  margin: 7px;
  box-shadow: 2px 2px 0.3em #67676728;
`;
