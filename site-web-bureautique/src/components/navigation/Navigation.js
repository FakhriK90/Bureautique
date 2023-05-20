import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import SearchIcon from "@mui/icons-material/Search";

function Navigation() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <div className="title-logo">
            <span>Entreprise Jadla Boujemaaa</span>
            <span>للتجهيز الاداري و المكتبي</span>
          </div>
        </Link>
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="Rechercher"
              />
              <button type="submit" className="searchButton">
                <SearchIcon />
              </button>
            </div>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/signin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Se connecter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Favories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu}>
                <div id="contain">
                  <ul>
                    <li className="category">
                      <h3 id="title">Nos produits</h3>
                      <ul>
                        <li>
                          <Link to="/fournitures">Fournitures</Link>
                          <ul>
                            <li>
                              <Link to="/stylos">Stylos</Link>
                            </li>
                            <li>
                              <Link to="/classeurs">Classeurs</Link>
                            </li>
                            <li>
                              <Link to="/colles">Colles</Link>
                            </li>
                            <li>
                              <Link to="/marqueurs">Marqeurs</Link>
                            </li>
                            <li>
                              <Link to="/adhesifs">Rubans adhésifs</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/informatiques">Informatiques</Link>
                          <ul>
                            <li>
                              <Link to="/pc_bureau">Pc bureautiques</Link>
                            </li>
                            <li>
                              <Link to="/ecrans">Ecrans</Link>
                            </li>
                            <li>
                              <Link to="/retroprojecteurs">
                                Rétroprojecteurs
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/bureautiques">Bureautiques</Link>
                          <ul>
                            <li>
                              <Link to="/fauteuils">Fauteuils</Link>
                            </li>
                            <li>
                              <Link to="/armoires">Armoires</Link>
                            </li>
                            <li>
                              <Link to="/chaises">Chaises</Link>
                            </li>
                            <li>
                              <Link to="/tables">Tables</Link>
                            </li>
                            <li>
                              <Link to="/ram">Papiers Ram</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
