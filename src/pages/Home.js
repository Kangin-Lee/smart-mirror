import React from "react";
import { useRef, useEffect, useState } from "react";
import Footer from "../component/Footer";
import HomeMain from "./HomeMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimeline,
  faCaretUp,
  faHouse,
  faShirt,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { Flip } from "react-reveal";
import HomeOutfit from "./HomeOutfit";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const outerDivRef = useRef();

  const goToTop = () => {
    outerDivRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setCurrentIndex(1);
  };
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setCurrentIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setCurrentIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setCurrentIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setCurrentIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={outerDivRef} className="outer">
      <Flip left delay={1400}>
        <div style={{ position: "fixed" }} className="timeline">
          <div className="timeline-topic timeline-index">
            <FontAwesomeIcon icon={faTimeline} />
            TIMELINE
          </div>
          <div
            className="timeline-topic timeline-main"
            style={{
              backgroundColor: currentIndex === 1 ? "#353740" : "white",
              color: currentIndex == 1 ? "white" : "rgb(163, 163, 163)",
            }}
          >
            <FontAwesomeIcon icon={faHouse} />
            MAIN
          </div>
          <div
            className="timeline-topic timeline-outfit"
            style={{
              backgroundColor: currentIndex === 2 ? "#353740" : "white",
              color: currentIndex == 2 ? "white" : "rgb(163, 163, 163)",
            }}
          >
            <FontAwesomeIcon icon={faShirt} />
            OUTFIT
          </div>
          <div
            className="timeline-topic timeline-color"
            style={{
              backgroundColor: currentIndex === 3 ? "#353740" : "white",
              color: currentIndex == 3 ? "white" : "rgb(163, 163, 163)",
            }}
          >
            <FontAwesomeIcon icon={faPalette} />
            COLOR MATCH
          </div>
          <div
            onClick={goToTop}
            className="timeline-topic timeline-top"
            style={{
              padding: "10px 0",
              borderTop: "none",
              backgroundColor: "#444654",
              color: "white",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faCaretUp} />
            TOP
          </div>
        </div>
      </Flip>
      <div className="inner home-main">
        <HomeMain />
      </div>
      <div className="divider"></div>
      <div className="inner home-outfit">
        <HomeOutfit />
      </div>
      <div className="divider"></div>
      <div className="inner home-color-match">3</div>
      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default Home;
