import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

const Footer = () => {
  const year = new Date().getFullYear();
  var pic1 = require("../../Images/Logo_footer/ENIGA.png");
  var pic2 = require("../../Images/Logo_footer/fsgf.png");
  var pic3 = require("../../Images/Logo_footer/IPEIG.png");
  var pic4 = require("../../Images/Logo_footer/ISAE.png");
  var pic5 = require("../../Images/Logo_footer/ISAM-G.png");
  var pic6 = require("../../Images/Logo_footer/ISEAH.png");
  var pic7 = require("../../Images/Logo_footer/Iset.png");
  var pic8 = require("../../Images/Logo_footer/ISSAT.png");
  var pic9 = require("../../Images/Logo_footer/ISSEP.png");
  var pic10 = require("../../Images/Logo_footer/Hôpital_régional_de_Gafsa.jpg");
  var pic11 = require("../../Images/Logo_footer/دار_المعارف.png");
  var pic12 = require("../../Images/Logo_footer/Groupement_santé_de_base_Gafsa.png");
  var pic13 = require("../../Images/Logo_footer/مندوبية_توزر.png");
  var pic14 = require("../../Images/Logo_footer/مندوبية_قبلي.png");
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Acceuil
            </Link>
            <div className="vl"></div>
            <Link to="/" className="social-logo">
              Présentation
            </Link>
            <div className="vl"></div>
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
      <div className="logos">
        <h1>État régional de Gafsa</h1>
        <div className="Etat-reg">
          <div className="rect">
            <div className="etat_logo">
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="École Nationale des Ingénieurs de Gafsa"
                arrow
              >
                <img src={pic1} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Faculté des Sciences de Gafsa"
                arrow
              >
                <img src={pic2} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Institut Préparatoire aux Etudes d'Ingénieur de Gafsa"
                arrow
              >
                <img src={pic3} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Institut Supérieur d'Administration des Entreprises de Gafsa"
                arrow
              >
                <img src={pic4} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Institut Supérieur d'arts et métiers de Gafsa"
                arrow
              >
                <img src={pic5} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Institut Supérieur des Etudes Appliquées en Humanités de Gafsa"
                arrow
              >
                <img src={pic6} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Institut Supérieur des Études Technologiques de Gafsa"
                arrow
              >
                <img src={pic7} alt="" />
              </Tooltip>
              <Tooltip
                title="Institut Supérieur des Sciences Appliquées et de Technologies de Gafsa"
                arrow
              >
                <img src={pic8} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Institut Supérieur du Sport et de l'Education Physique de Gafsa"
                arrow
              >
                <img src={pic9} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Hôpital Régional de Gafsa"
                arrow
              >
              <img src={pic10} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="دار المعارف"
                arrow
              >
              <img src={pic11} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Groupement santé de base Gafsa"
                arrow
              >
              <img src={pic12} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="مندوبية توزر"
                arrow
              >
              <img src={pic13} alt="" />
              </Tooltip>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="مندوبية قبلي"
                arrow
              >
              <img src={pic14} alt="" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
