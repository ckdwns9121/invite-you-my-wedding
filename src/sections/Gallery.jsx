import React, { useState, useRef, useMemo } from "react";
import styled from "styled-components";

import { TextCategoryTitle, EmptyBox } from "../styles";
import { _IMAGE_SRCS, _PATH } from "../constants/image";
import MultiSlick from "../components/Slick/MultiSlick";
import ImageModal from "../components/Modal/ImageModal";

export default function Gallery() {
  const optimizedImagePaths = useMemo(() => {
    return _IMAGE_SRCS.map((imageName) => `${process.env.PUBLIC_URL}/image/gallery/${imageName}`);
  }, []);

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [tab, setTab] = useState(0);

  const slideRef = useRef(null);
  const testRef = useRef(null);

  const handleOpenModal = (src, index) => {
    setSelectedImage(`${_PATH}/${src}`);
    setTab(index);
    setIsImageModalOpen(true);
    slideRef.current?.slickGoTo(index);
  };

  return (
    <Container as="section" aria-label="웨딩 갤러리">
      <Flex ref={testRef} data-aos="fade-up" data-aos-duration="900">
        <EmptyBox />
        <TextCategoryTitle as="h2">Gallery</TextCategoryTitle>
        <SliderWrapper>
          <MultiSlick aria-label="웨딩 사진 슬라이더">
            {optimizedImagePaths.map((src, index) => (
              <WeddingImageWrapper key={index}>
                <WeddingImage
                  src={src}
                  alt={`웨딩 사진 ${index + 1}`}
                  onClick={() => handleOpenModal(src, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleOpenModal(src, index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`웨딩 사진 ${index + 1} 확대하기`}
                  loading="lazy"
                  decoding="async"
                />
              </WeddingImageWrapper>
            ))}
          </MultiSlick>
        </SliderWrapper>
        <EmptyBox />
      </Flex>
      <ImageModal
        ref={slideRef}
        isModalOpen={isImageModalOpen}
        src={selectedImage}
        handleCloseModal={() => setIsImageModalOpen(false)}
        tab={tab}
      />
    </Container>
  );
}

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0ede6;
  will-change: transform;
`;

const Container = styled.div`
  position: relative;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const WeddingImageWrapper = styled.div`
  padding: 2px 4px;
  box-sizing: border-box;
`;

const WeddingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  cursor: pointer;

  @media (max-width: 414px) {
    min-height: 301px;
  }
  @media (max-width: 375px) {
    min-height: 273px;
  }
  @media (max-width: 360px) {
    min-height: 270px;
  }
  @media (max-width: 290px) {
    min-height: 220px;
  }
`;
