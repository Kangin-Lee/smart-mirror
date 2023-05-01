import React from "react";
import { Flip, Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faShirt,
  faChevronRight,
  faFilter,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

//1번 텍스트 뒤에 이미지 슬라이드 몇개 사라락
//1. api 호출 > 내가 현재 있는 위치의 날씨를 받아온다.
//2. 날씨에 맞는 옷차림을 카테고리 별로 추천한다.
//3. 스타일 별로 필터링 해서 다시 볼 수 있다.
//4. 옷장에서 추천
//페이지 바로가기 버튼

// 2번 텍스트 뒤에 옷장 사진 보여주고
// 플레이스토어, 앱스토어 바로가기 버튼 쫙

const HomeOutfit = () => {
  const navigate = useNavigate();

  const goToOutfit = () => {
    navigate("/outfit");
  };

  const goToMyCloth = () => {
    navigate("/mycloth");
  };

  const goToPage = () => {
    return (
      <button className="goToPage-btn" onClick={goToOutfit}>
        바로가기
        <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "1em" }} />
      </button>
    );
  };

  return (
    <div className="main-second-page">
      <div className="second-page-category">
        <Fade top>
          <div className="second-page-contents">
            <Fade top delay={700}>
              <FontAwesomeIcon icon={faTemperatureLow} />
              <div className="second-page-title">API Call</div>
              <p style={{ marginBottom: "0" }}>
                날씨 API를 호출하여 현재 사용자가 위치하고 있는 날씨를 받아볼 수
                있습니다. 이를 통해 기온 별 옷차림을 추천해 드립니다.
              </p>
            </Fade>
          </div>
        </Fade>

        <Fade top delay={800}>
          <div className="second-page-contents" style={{ height: "40vh" }}>
            <Fade top delay={1500}>
              <FontAwesomeIcon icon={faShirt} />
              <div className="second-page-title">Clothes By Temperature</div>
              <p>
                API로 받아온 날씨을 바탕으로 그 날씨와 맞는 옷차림을 카테고리
                별로 추천해 드립니다. 마음에 들지 않으면 '다시 추천' 버튼을
                클릭해 보세요.
              </p>
              {goToPage()}
            </Fade>
          </div>
        </Fade>

        <Fade top delay={1600}>
          <div className="second-page-contents">
            <Fade top delay={2300}>
              <FontAwesomeIcon icon={faFilter} />
              <div className="second-page-title">Filtering Styles</div>
              <p>
                추천한 옷차림이 마음에 들지 않으신가요? 그렇다면 필터링 기능을
                사용해 보세요. 스트릿, 댄디, 시티보이 등의 여러 스타일을 필터링
                해서 자신이 원하는 스타일로 옷차림을 추천해 드립니다.
              </p>
              {goToPage()}
            </Fade>
          </div>
        </Fade>

        <Fade top delay={2400}>
          <div
            className="second-page-contents last-contents"
            style={{ height: "40vh" }}
          >
            <Fade top delay={3100}>
              <FontAwesomeIcon icon={faHouse} />
              <div className="second-page-title">Recommended In The Closet</div>
              <p>
                추천해 드린 옷이 집에 없으신가요? 걱정하지 마세요. 본인의 옷장에
                있는 옷들로 추천해 드립니다. 휴대폰으로 본인의 옷을 찍어보세요.
              </p>
              <button className="goToPage-btn" onClick={goToMyCloth}>
                바로가기
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ fontSize: "1em" }}
                />
              </button>
            </Fade>
          </div>
        </Fade>
      </div>

      {/* Today's outfit */}
      <div>
        <Flip bottom>
          <h1>Today's Outfit</h1>
        </Flip>
      </div>
    </div>
  );
};

export default HomeOutfit;
