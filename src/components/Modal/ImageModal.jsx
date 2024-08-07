import { forwardRef, useMemo } from "react";
import styled from "styled-components";

// component

import { Dimed } from "./ConnectInfoModal";
import IconButton from "../Button/IconButton";
import CloseSvg from "../Icons/Close";

// constant
import { _IMAGE_SRCS } from "../../constants/image";

// slick
import Slider from "react-slick";

const ImageModal = forwardRef(({ src, isModalOpen, handleCloseModal, ...props }, ref) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const optimizedImagePaths = useMemo(() => {
    return _IMAGE_SRCS.map((imageName) => `${process.env.PUBLIC_URL}/image/gallery/${imageName}`);
  }, []);

  return (
    <>
      <Container isOpen={isModalOpen}>
        <Header>
          <IconButtonWrapper>
            <IconButton onClick={handleCloseModal} aria-label="닫기">
              <CloseSvg />
            </IconButton>
          </IconButtonWrapper>
        </Header>
        <Wrapper>
          <Slider {...settings} ref={ref}>
            {optimizedImagePaths.map((src) => (
              <Image src={src} key={src} loading="lazy" alt={`웨딩사진-${src}`} />
            ))}
          </Slider>
        </Wrapper>
      </Container>
      <Dimed isOpen={isModalOpen} onClick={handleCloseModal} style={{ opacity: "0.9" }} />
    </>
  );
});

const Header = styled.header`
  width: 100%;
  height: 48px;
  position: absolute;
  z-index: 999;
  top: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 435px;
  margin: 0 auto;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  z-index: ${({ isOpen }) => (isOpen ? 999 : -999)};

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const IconButtonWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export default ImageModal;
