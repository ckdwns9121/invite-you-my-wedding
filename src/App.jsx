// styles
import "./font.css";
import "./App.css";
import styled, { keyframes } from "styled-components";

// hooks
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

// component
import Starting from "./sections/Starting";
import Poster from "./sections/Poster";
import Poetry from "./sections/Poetry";
import Calendar from "./sections/CalendarSection";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import WeddingInfo from "./sections/WeddingInfo";
import Posting from "./sections/Posting";
import Ending from "./sections/Ending";
import Footer from "./sections/Footer";
import ConnectInfoModal from "./components/Modal/ConnectInfoModal";

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// toast
import { ToastContainer } from "react-toastify";

import Sound from "./components/Sound/Sound";
import { BrowserRouter } from "react-router-dom";

// icon

function App() {
  useEffect(() => {
    AOS.init({
      offset: 20,
    });
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RecoilRoot>
        <StyledLayout>
          <Sound />
          <StyledNav>배경음악이 준비되어 있습니다.</StyledNav>
          <Starting />
          <Poetry />
          <Calendar />
          <Gallery />
          <Location />
          <WeddingInfo />
          <Posting />
          <Ending />
          <Poster />
          <Footer />
        </StyledLayout>
        <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} />
        <ConnectInfoModal />
      </RecoilRoot>
    </BrowserRouter>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  max-width: 435px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 360px) {
    max-width: 360px;
  }
`;
const slideInOut = keyframes`
  0% {
    transform: translateY(-48px);
  }
  10%, 90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-48px);
  }
`;

const StyledNav = styled.div`
  @media (max-width: 360px) {
    max-width: 360px;
  }

  width: 100%;
  max-width: 435px;
  height: 48px;
  position: absolute;
  top: 0;

  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;

  background-color: #f0ede6;
  color: #606060;

  /* 애니메이션 적용 */
  animation: ${slideInOut} 3.5s ease-in-out;
  animation-fill-mode: forwards;
`;

export default App;
