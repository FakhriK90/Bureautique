import React from "react";
import "./homeJB.css";

const HomeJB = () => {
  var logo = require("../../Images/Logo/Entreprise jadla boujemaa.png")
  return (
    <div>
      <div className="contenu_carou_auto">
        <div className="caroussel-image">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            alt=""
          />
          <img
            src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
            alt=""
          />
          <img
            src="https://blog.chinevoyages.com/wp-content/uploads/2011/06/ca-sent-les-vacances-gratuites.jpg"
            alt=""
          />
          <img
            src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
            alt=""
          />
          <img
            src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753"
            alt=""
          />
          <img
            src="https://www.tunisianet.com.tn/35969-large/rame-papier-navigator-a4-80gm-extra-blanc.jpg"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&w=1000&q=80"
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
                <img
                  src={logo}
                  alt="logo"
                  className="main__img"
                />
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
