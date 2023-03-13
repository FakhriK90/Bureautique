import React from "react";
import "./homeJB.css";

const HomeJB = () => {
  var logo = require("../../Images/Logo/Entreprise jadla boujemaa.png");
  return (
    <div>
      <div className="contenu_carou_auto">
        <div className="caroussel-image">
          <img
            src={require("../../Images/Produits/equipements_informatiques/Ordinateurs_de_bureau/PC_DE_BUREAU_DELL.jpg")}
            alt=""
          />
          <img
            src={require("../../Images/Produits/equipements_bureautiques/Tables/Table_DIGITAL.jpg")}
            alt=""
          />
          <img
            src={require("../../Images/Produits/Fournitures/Colles/colle-gm-38g-panda-.png")}
            alt=""
          />
          <img
            src={require("../../Images/Produits/equipements_bureautiques/Armoires/Armoire_ Melamine_2_Portes.jpg")}
            alt=""
          />
          <img
            src={require("../../Images/Produits/equipements_informatiques/Rétroprojecteurs/VIDÉOPROJECTEUR_EPSON_EB-X20.jpg")}
            alt=""
          />
          <img
            src={require("../../Images/Produits/Fournitures/Stylos/Stadler/staedtler-elance-421-25-stylo-a-bille.jpg")}
            alt=""
          />
          <img
            src={require("../../Images/Produits/equipements_bureautiques/Papiers_Ram/Rame_Papier_DISCOVERY_A4_70Gr_500_Feuilles.jpg")}
            alt=""
          />
          <img
            src={require("../../Images/Produits/equipements_informatiques/Ecrans/Fujitsu.jpg")}
            alt=""
          />
        </div>
      </div>
      <div className="container main__section" id="about">
        <div className="main__container">
          <h1>Qui sommes nous ?</h1>
          <div className="main__content">
            <div className="main__text">
              <p>
                Notre entreprise propose des offres adaptées au milieu
                professionnel. Que vous soyez une université, école, faculté ,
                association ou administration, vous bénéficierez d'un
                accompagnement personnalisé et de solutions adaptées à vos
                établissement: biens d'équipements bureautiques, achats
                volumiques, équipement informatique ou bien fournitures pour vos
                bureaux ...
              </p>
              <div className="main__image">
                <img src={logo} alt="logo" className="main__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prod_card_section">
        <h2>Quels sont nos prodauits?</h2>
        <div className="nos_produits">
          <div className="row">
            <div className="example-2 card">
              <div className="wrapper bureautique">
                <div className="header">
                  <ul className="menu-content">
                    <li>
                      <a href="#" className="fa fa-heart-o"></a>
                    </li>
                  </ul>
                </div>
                <div className="data">
                  <div className="content">
                    <h1 className="title">
                      <a href="#">Bureautiques</a>
                    </h1>
                    <p className="text">
                      The antsy bingers of Netflix will eagerly anticipate the
                      digital release of the Survive soundtrack, out today.
                    </p>
                    <a href="#" className="button">
                      Découvrir
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="example-2 card">
              <div className="wrapper informatique">
                <div className="header">
                  <ul className="menu-content">
                    <li>
                      <a href="#" className="fa fa-heart-o"></a>
                    </li>
                  </ul>
                </div>
                <div className="data">
                  <div className="content">
                    <h1 className="title">
                      <a href="#">Informatiques</a>
                    </h1>
                    <p className="text">
                      The antsy bingers of Netflix will eagerly anticipate the
                      digital release of the Survive soundtrack, out today.
                    </p>
                    <a href="#" className="button">
                      Découvrir
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="example-2 card">
              <div className="wrapper scolaire">
                <div className="header">
                  <ul className="menu-content">
                    <li>
                      <a href="#" className="fa fa-heart-o"></a>
                    </li>
                  </ul>
                </div>
                <div className="data">
                  <div className="content">
                    <h1 className="title">
                      <a href="#">Fournitures</a>
                    </h1>
                    <p className="text">
                      The antsy bingers of Netflix will eagerly anticipate the
                      digital release of the Survive soundtrack, out today.
                    </p>
                    <a href="#" className="button">
                      Découvrir
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeJB;
