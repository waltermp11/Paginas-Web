import React from "react";
import DH from "../assets/img/DH.png"
import ico_facebook from "../assets/img/ico-facebook.png";
import ico_instagram from "../assets/img/ico-instagram.png";
import ico_tiktok from "../assets/img/ico-tiktok.png";
import ico_whatsapp from "../assets/img/ico-whatsapp.png";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Powered by DH</h3>
      <img src={DH} className="dh-png"/>
      <div className="footer-iconos-redes">
        <img src={ico_facebook} className="icons-footer"/>
        <img src={ico_instagram} className="icons-footer"/>
        <img src={ico_tiktok} className="icons-footer"/>
        <img src={ico_whatsapp} className="icons-footer"/>
      </div>

    </footer>
  );
};

export default Footer;
