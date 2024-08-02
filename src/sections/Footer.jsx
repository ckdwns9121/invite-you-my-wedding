import React, { useEffect, useState } from "react";
import styled from "styled-components";

const KakaoShareButton = () => {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao) {
        window.Kakao.init("933c1dc5c71683ec8ee52c1de08223ff");
        setIsKakaoLoaded(true);
      }
    };

    script.onerror = () => {
      console.error("Failed to load Kakao SDK");
      setIsKakaoLoaded(false);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleShare = () => {
    if (window.Kakao && isKakaoLoaded) {
      window.Kakao.Share.sendCustom({
        templateId: 107185,
        templateArgs: {
          title: "소종범 ♥️ 권유정 결혼합니다.",
          description: "2024년 6월 2일 (일) 오후 12시 10분, 창원 힐스카이 10층 힐그랜드홀",
        },
      });
    } else {
      alert("카카오톡 공유 기능을 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  return (
    <ShareButton onClick={handleShare} disabled={!isKakaoLoaded}>
      카카오톡으로 공유하기
    </ShareButton>
  );
};

export default function Footer() {
  return (
    <Container as="footer" aria-label="페이지 하단부">
      <Link
        href="https://github.com/devchaeyoung/invite-you-my-wedding"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="개발자 GitHub 페이지로 이동"
      >
        <Flex>
          <Text>&copy; Dev chaeyoung</Text>
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
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  color: white;
  text-align: center;
  margin: 0;
  padding: 5px 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 5px 10px;
`;

const ShareButton = styled.button`
  width: 80%;
  max-width: 300px;
  height: 40px;
  background-color: #fee500;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;

  &:hover,
  &:focus {
    background-color: #fdd835;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;
