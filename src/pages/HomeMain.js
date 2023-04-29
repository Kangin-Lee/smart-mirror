import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight,faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Flip, Fade } from "react-reveal";
import { Container } from "react-bootstrap";

const images = [
  "/images/mirror.jpg",
  "/images/mainPage.jpg",
  "/images/iot.jpg",
];

const HomeMain = () => {
  const [image, setImage] = useState("/images/mirror.jpg");
  const [imgPer, setImgPer] = useState(1);
  const [intervalRef, setIntervalRef] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const detailText = () => {
    if (image == images[0]) {
      return (
        <Flip top>
          <span>이전과는 다른 스마트 미러를 사용해 보세요.</span>
        </Flip>
      );
    } else if (image == images[1]) {
      return (
        <Flip top>
          <span>
            컬러매치 더 이상 고민하지 마세요. 스타일리스트는 색을 인식해
            자동으로 추천해 줍니다.
          </span>
        </Flip>
      );
    } else {
      return (
        <Flip top>
          <span>
            스타일리스트는 여러 디바이스와 함께 연동해서 사용할 수 있습니다.
          </span>
        </Flip>
      );
    }
  };

  const perBar = () => {
    if (image == images[0]) {
      return (
        <div style={{ display: "flex" }} className="imgPer">
          <div style={{ flex: 1, backgroundColor: "green" }}></div>
          <div style={{ flex: 1 }}></div>
          <div style={{ flex: 1 }}></div>
        </div>
      );
    } else if (image == images[1]) {
      return (
        <div style={{ display: "flex" }} className="imgPer">
          <div style={{ flex: 1, backgroundColor: "green" }}></div>
          <div style={{ flex: 1, background: "green" }}></div>
          <div style={{ flex: 1 }}></div>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex" }} className="imgPer">
          <div style={{ flex: 1, backgroundColor: "green" }}></div>
          <div style={{ flex: 1, backgroundColor: "green" }}></div>
          <div style={{ flex: 1, backgroundColor: "green" }}></div>
        </div>
      );
    }
  };

  // 현재 이미지 state와 다음 이미지 state를 계산합니다.
  const currentImageIndex = images.indexOf(image);
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const nextImage = images[nextImageIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 다음 이미지로 state를 업데이트 합니다.
      setImage(nextImage);
      setImgPer(imgPer + 1);
      if (imgPer + 1 > 3) {
        setImgPer(1);
      }
    }, 6000); // 5초마다 이미지 변경
    setIntervalRef(intervalId);
    // 컴포넌트가 unmount 될 때 interval을 정리합니다.
    return () => clearInterval(intervalId);
  }, [image]); // image state가 변경될 때마다 useEffect 함수가 호출됩니다.

  const goToNextImage = () => {
    setImage(nextImage);
    setImgPer(imgPer + 1);
    if (imgPer + 1 > 3) {
      setImgPer(1);
    }
  };

  const pauseSlider = () =>{
    clearInterval(intervalRef);
    setIsClicked(!isClicked);
  }

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="homeMain">
      <Navbar />
      <Container maxWidth="lg" className="main-contents">
        <Fade left duration={1700}>
          <div className="main-text">
            <strong>
              Smart Mirror <strong>Stylist</strong>
              <div>Experience a different smart mirror than before</div>
            </strong>
          </div>
        </Fade>

        <Flip top delay={1400}>
          <Flip top>
            <span>{detailText()}</span>
          </Flip>

          <div className="img-slide-btn">
            {perBar()}
            <div
              style={{
                color: "white",
                fontSize: "1.2em",
                fontWeight: "bold",
                margin: "0 20px",
              }}
            >
              {imgPer}/3
            </div>
            <button onClick={pauseSlider} className="pause-btn">
              {isClicked ? (<FontAwesomeIcon icon={faPlay} />) : (<FontAwesomeIcon icon={faPause} />)}
              
            </button>
            <button onClick={goToNextImage} className="next-btn">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </Flip>
      </Container>

      <div className="scrolldown">
        <div style={{ fontFamily: "Comfortaa, cursive" }}>Scroll Down</div>
        <img width={60} src="/images/scrolldown.gif" />
      </div>
    </div>
  );
};

export default HomeMain;
