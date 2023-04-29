import React from "react";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Container maxWidth="lg" className="menu-bar">
        <div className="logo">
          <div>
            <Link to="/">
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
                <FontAwesomeIcon icon={faCircleUser} className="login-icon"/>
                <div className="login-text">로그인</div>
              </button>

              <div className="weather">날씨</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
