import React from "react";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };

  const [weather, setWeather] = useState(null);
  //위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=07c8f80150954d942a79882827366bc7&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  let weatherIcon = `/images/weatherIcon/${weather?.weather[0].icon}.png`;
  return (
    <div>
      <Container maxWidth="lg" className="menu-bar">
        <div className="logo">
          <div>
            <Link to="/" className="logo-stylist">
              <h1>Stylist</h1>
              <h5>smart mirror</h5>
            </Link>
          </div>

          <div>
            <div className="menu">
              <Link to="/">HOME</Link>
              <Link to="/Outfit">오늘의 착장</Link>
              <Link to="/colormatch">컬러매치</Link>
              <Link to="/mycloth">옷장에서 추천</Link>
            </div>
            <div className="login-weather">
              <button onClick={gotoLogin} className="login">
                <FontAwesomeIcon icon={faCircleUser} className="login-icon" />
                <div className="login-text">로그인</div>
              </button>

              <div className="weather">
                <img
                  width={45}
                  src={weatherIcon}
                  style={{ marginRight: "3px" }}
                />
                <div>
                  {weather?.name}/{weather?.main.temp.toFixed()}℃
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
