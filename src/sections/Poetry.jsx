import Button from "../components/Button/Button";
import styled from "styled-components";
import { Flower } from "../styles";
import { useSetRecoilState } from "recoil";
import modalState from "../store/infoModal";

export default function Poetry() {
  const setModalState = useSetRecoilState(modalState);
  return (
    <Container>
      <FormWrapper data-aos="flip-left" data-aos-delay="300" data-aos-duration="1200">
        <BackgoundImage src="image/form-background.png" />
        <Flower className="f-t" src="image/flower.png" />
        <TextWrapper className="align-l">
          <Text>유월의 어느 초여름,</Text>
          <Text>늘 곁에서 아껴주셨던 고마운 분들을 모십니다.</Text>
          <Text>있는 그대로 사랑하고</Text>
          <Text>서로의 존재를 감사하며</Text>
          <Text>인연이었던 저희 두 사람</Text>
          <Text>같이 있으면 기분 좋아지는 그대와 함께</Text>
          <Text>인생의 길을 걸어가겠습니다.</Text>
        </TextWrapper>
        <Flower className="f-b" src="image/flower.png" />
      </FormWrapper>
      <FormWrapper className="w1">
        <TextRowWrapper data-aos="fade-up" data-aos-delay="300">
          <TextWrapper className="alignt-l">
            <Text className="t1">소영식·박숙녀의 아들</Text> <Text className="t1">권태건·마은영의 딸</Text>
          </TextWrapper>
          <TextWrapper className="align-r">
            <Text className="t2">종범</Text> <Text className="t2">유정</Text>
          </TextWrapper>
        </TextRowWrapper>
        <Button onClick={() => setModalState(true)} data-aos="fade-up" data-aos-delay="200">
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
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextRowWrapper = styled.div`
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
const BackgoundImage = styled.img`
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
