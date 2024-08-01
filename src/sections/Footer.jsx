import { useEffect } from "react";
import styled from "styled-components";

const KakaoShareButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao) {
        window.Kakao.init("933c1dc5c71683ec8ee52c1de08223ff");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendCustom({
        templateId: 107185,
        templateArgs: {
          title: "소종범 ♥️ 권유정 결혼합니다.",
          description: "2024년 6월 2일 (일) 오후 12시 10분, 창원 힐스카이 10층 힐그랜드홀",
        },
      });
    }
  };

  return <ShareButton onClick={handleShare}>카카오톡으로 공유하기</ShareButton>;
};

export default function Footer() {
  return (
    <Container>
      <Link target="" href="https://github.com/devchaeyoung/invite-you-my-wedding">
        <Flex>
          <Text>&@copyright</Text>
          <Text>Dev chaeyoung</Text>
        </Flex>
      </Link>
      <KakaoShareButton />
    </Container>
  );
}

const Container = styled.div`
  background-color: #a8a8a8;
  position: relative;
  width: 100%;
  height: 56px;
  margin: 0;
`;

const Text = styled.p`
  color: white;
  text-align: center;
  height: 100%;
`;

const Link = styled.a`
  text-decoration: none;
`;
const Flex = styled.div`
  position: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 12px 10px 0px 10px;
`;

const ShareButton = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;
  text-align: center;
  color: #000000;
  line-height: 40px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
`;
