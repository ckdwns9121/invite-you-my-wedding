import { TextCategoryTitle, EmptyBox } from "../styles";
import styled from "styled-components";
import useCopyClipboard from "../hooks/useCopyClipboard";
import { toast } from "react-toastify";

export default function Location({ ref }) {
  const { copyToClipboard } = useCopyClipboard();
  const notify = (target) => toast(`${target} 주소가 복사되었습니다.`);

  return (
    <Container ref={ref}>
      <Flex>
        <EmptyBox />
        <TextCategoryTitle id="location">location</TextCategoryTitle>
        <Text>창원 힐스카이웨딩 10층</Text>
        <Text>힐그랜드홀</Text>
        <Text>2024년 6월 2일</Text>
        <Text>점심 12시 10분</Text>
        <MapWrapper>
          <StyledA href="https://map.kakao.com/link/search/창원 힐스타이웨딩">
            <MapIcon src={`${process.env.PUBLIC_URL}/nav-icon/kakaomap.png`} />
          </StyledA>
          <StyledA href="https://map.naver.com/p/search/%EC%B0%BD%EC%9B%90%20%ED%9E%90%20%EC%8A%A4%EC%B9%B4%EC%9D%B4%20%EC%9B%A8%EB%94%A9">
            <MapIcon src={`${process.env.PUBLIC_URL}/nav-icon/navermap.png`} />
          </StyledA>
          <StyledA href="https://tmap.life/62ffaa39">
            <MapIcon src={`${process.env.PUBLIC_URL}/nav-icon/tmap.png`} />
          </StyledA>
          <StyledA href="https://www.google.com/maps/dir//%ED%9E%90%EC%8A%A4%EC%B9%B4%EC%9D%B4+%EC%9B%A8%EB%94%A9%26%EC%BB%A8%EB%B2%A4%EC%85%98+Gyeongsangnam-do,+Changwon-si,+Masanhoewon-gu,+Bongam-dong,+133/data=!4m8!4m7!1m0!1m5!1m1!1s0x356f33b97d989541:0x43b9f3c30f6c73d2!2m2!1d128.6014549!2d35.2190478?entry=ttu">
            <MapIcon src={`${process.env.PUBLIC_URL}/nav-icon/googlemap.png`} />
          </StyledA>
        </MapWrapper>
      </Flex>
      <Flex>
        <LocationInfoBox>
          <Text className="t">창원 힐스카이웨딩 & 컨벤션 힐그랜드홀</Text>
          <ImageWedding
            src={`${process.env.PUBLIC_URL}/image/weddingholl-image.jpeg`}
            alt="웨딩홀사진"
            loading="lazy"
          />
          <Text className="tb">📍 도로명 주소</Text>
          <Text
            className="doc"
            onClick={() => {
              copyToClipboard("경남 창원시 마산회원구 봉암로 133");
              notify(`도로명`);
            }}
          >
            경남 창원시 마산회원구 봉암로 133
          </Text>
          <Text className="tb">📍 지번 주소</Text>
          <Text
            className="doc"
            onClick={() => {
              copyToClipboard("봉암동 391-205");
              notify(`지번`);
            }}
          >
            봉암동 391-205
          </Text>
          <Text className="tb">🚌 버스를 타고 오실 경우</Text>
          <Text className="doc">
            <B>봉암공단 입구</B>에서 하차
          </Text>
          <Text className="doc">간선 - 107, 114, 160, 116, 162, 163, 164</Text>
          <Text className="doc">지선 - 257</Text>
          <Text className="doc">좌석 - 740, 3002</Text>
          <Text className="tb">🚙 자가용을 이용하실 경우</Text>
          <Text className="doc">
            ✔️ 봉암공단사거리, 창원역, 마산시외버스 터미널, 마산 어시장, 마산역 경전선(<B>마산 봉암수원지 입구</B> 유턴
            후 <B>300m 직진</B>)
          </Text>
          <Text className="doc">✔️ 진해, 창원, 시외버스터미널, 창원대로 힐스카이 앞 도착</Text>
          <Text className="doc">
            ✔️ <B>자유지역교 이용시</B> GS셀프 주유소 지나 CU편의점 좌회전
          </Text>
          <Text className="doc">
            ✔️ <B>고속도로 이용 시</B> 동마산 IC 진입 10분 거리
          </Text>
        </LocationInfoBox>
        <EmptyBox />
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-bottom: 110px;
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0ede6;
`;

export const StyledA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 0px;
  margin: 0px;
  border: 0px;
`;

const ImageWedding = styled.img`
  width: 100%;
  margin-top: 12px;
`;

const LocationInfoBox = styled.div`
  @media (max-width: 430px) {
    width: 85%;
  }
  width: 80%;
`;

const MapWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const MapIcon = styled.img`
  border-radius: 12px;
  width: 75%;
  margin: 5px;
  box-shadow: 2px 2px 0.3em #67676728;
`;

const Text = styled.p`
  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
  @media (max-width: 414px) {
    font-size: 1.5rem;
  }
  @media (max-width: 393px) {
    font-size: 1.3rem;
  }
  @media (max-width: 390px) {
    font-size: 1.5rem;
  }
  @media (max-width: 375px) {
    font-size: 1.6rem;
  }
  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
  @media (max-width: 290px) {
    font-size: 1.6rem;
  }
  font-size: 1.35rem;
  &.doc {
    @media (max-width: 430px) {
      font-size: 1.5rem;
    }
    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
    @media (max-width: 393px) {
      font-size: 1.3rem;
    }
    @media (max-width: 390px) {
      font-size: 1.5rem;
    }
    @media (max-width: 375px) {
      font-size: 1.5rem;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
    @media (max-width: 290px) {
      font-size: 1.6rem;
    }
  }
  &.t {
    @media (max-width: 430px) {
      font-size: 1.4rem;
    }
    @media (max-width: 414px) {
      font-size: 1.6rem;
    }
    @media (max-width: 393px) {
      font-size: 1.4rem;
    }
    @media (max-width: 390px) {
      font-size: 1.5rem;
    }
    @media (max-width: 375px) {
      font-size: 1.6rem;
    }
    font-size: 1.5rem;
  }

  &.tb {
    font-weight: 700;
    margin-top: 12px;
  }
`;

const B = styled.span`
  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
  @media (max-width: 414px) {
    font-size: 1.4rem;
  }
  @media (max-width: 412px) {
    font-size: 1.4rem;
  }
  @media (max-width: 393px) {
    font-size: 1.2rem;
  }
  @media (max-width: 390px) {
    font-size: 1.4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
  font-weight: 600;
  font-size: 1.1rem;
`;
