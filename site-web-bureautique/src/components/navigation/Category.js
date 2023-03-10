import * as React from "react";
import "./category.css";
import { Link } from "react-router-dom";

export default function Category() {
  return (
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
                  <Link to="/retroprojecteurs">Rétroprojecteurs</Link>
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
  );
}
