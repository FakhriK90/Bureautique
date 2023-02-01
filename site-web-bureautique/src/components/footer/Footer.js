import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  var pic1 = require("../../Images/Rectorat Gafsa/ENIGA.png");
  var pic2 = require("../../Images/Rectorat Gafsa/fsgf.png");
  var pic3 = require("../../Images/Rectorat Gafsa/IPEIG.png");
  var pic4 = require("../../Images/Rectorat Gafsa/ISAE.png");
  var pic5 = require("../../Images/Rectorat Gafsa/ISAM-G.png");
  var pic6 = require("../../Images/Rectorat Gafsa/ISEAH.png");
  var pic7 = require("../../Images/Rectorat Gafsa/Iset.png");
  var pic8 = require("../../Images/Rectorat Gafsa/ISSAT.png");
  var pic9 = require("../../Images/Rectorat Gafsa/ISSEP.png");
  return (
    <div className="footer-container">
      
      
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL
              <i class="fab fa-typo3" />
            </Link>
            <Link to="/" className="social-logo">
              TRVL
              <i class="fab fa-typo3" />
            </Link>
            <Link to="/" className="social-logo">
              TRVL
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <div className="social-icons">
            <Link
            className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
            className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
            className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
            className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
            className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>     
               <small className="website-rights">{`© Entreprise Jadla Boujemaaa للتجهيز الاداري و المكتبي ${year}`}</small>
        </div>
      </section>
      <h1>État régional de Gafsa</h1>
      <div className="Etat-reg">
        <div className="rect">
          <h2>Rectorat</h2>
          <div className="etat_logo">
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
            <img src={pic6} alt="" />
            <img src={pic7} alt="" />
            <img src={pic8} alt="" />
            <img src={pic9} alt="" />
          </div>
        </div>
        <div className="rect">
          <h2>Rectorat</h2>
          <div className="etat_logo">
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
          </div>
        </div>
        <div className="rect">
          <h2>Rectorat</h2>
          <div className="etat_logo">
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
