import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const btns = [
    "이용약관",
    "개인정보처리방침",
    "책임의 한계와 법적고지",
    "회원정보 고객선터",
  ];
  return (
    <div className="footer">
      <Container className="footer-content">
        <div className="footer-text">
          <h1>Stylist</h1>
          <p>
            Stylist is a site that has most of the information related to
            fashion.
          </p>
          <p>So you don't have to look for information in multiple places.</p>
          <p>
            It is also a smart website that works with smart mirrors and apps.
          </p>
        </div>

        <div className="footer-icons">
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span>
            <FontAwesomeIcon icon={faYoutube} />
          </span>
          <span>
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTiktok} />
          </span>
        </div>

        <div className="footer-div">
          {btns.map((menu) => (
            <div className="footer-btns">{menu}</div>
          ))}
        </div>

        <div className="copyright">
          <p>Copyright 2023. SmartStylist all right reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;