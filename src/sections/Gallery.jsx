import { useState, useRef, useMemo } from "react";
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
    <Container>
      <Flex ref={testRef} data-aos="fade-up" data-aos-duration="900">
        <EmptyBox />
        <TextCategoryTitle>gallery</TextCategoryTitle>
        <SliderWraper>
          <MultiSlick>
            {optimizedImagePaths.map((src, index) => (
              <WeddingImage
                src={src}
                onClick={() => handleOpenModal(src, index)}
                key={index}
                loading="lazy"
                decoding="async"
              />
            ))}
          </MultiSlick>
        </SliderWraper>
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
const SliderWraper = styled.div`
  position: relative;
  width: 100%;
`;

const WeddingImage = styled.img`
  @media (max-width: 414px) {
    min-height: 301px;
  }
  @media (max-width: 375px) {
    min-height: 273px;
  }
  @media (max-width: 360px) {
    min-height: 270px;
  }
  @media (max-width: 360px) {
    min-height: 264px;
  }
  @media (max-width: 290px) {
    min-height: 220px;
  }
  width: 100%;
  min-height: 318px;
  padding: 2px 4px;
  box-sizing: border-box;
  object-fit: cover;
  object-position: center center;
`;
