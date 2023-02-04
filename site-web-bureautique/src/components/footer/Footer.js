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
              Acceuil
            </Link>
            <div class="vl"></div>
            <Link to="/" className="social-logo">
              Présentation
            </Link>
            <div class="vl"></div>
            <Link to="/" className="social-logo">
              Contactez-nous
            </Link>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link phone"
              to="/"
              target="_blank"
              aria-label="Phone"
            >
            <i className="fa-solid fa-phone"></i>
            <span>+216 ** *** ***</span>
            </Link>
            <Link
              className="social-icon-link mail"
              to="/"
              target="_blank"
              aria-label="E-mail"
            >
            <i className="fa-solid fa-envelope"></i>
              <span>jadlaboujemaa@gmail.com</span>
            </Link>
          </div>
          <small className="website-rights">{`© Entreprise Jadla Boujemaaa للتجهيز الاداري و المكتبي ${year}`}</small>
        </div>
      </section>
      <div className="footer_logo">
      <h1>État régional de Gafsa</h1>
      <div className="Etat-reg">
        <div className="rect">
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
      </div>
      </div>
    </div>
  );
};

export default Footer;
