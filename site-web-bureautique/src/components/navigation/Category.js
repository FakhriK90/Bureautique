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
              <Link to="">Fournitures</Link>
              <ul>
                <li>
                  <Link to="">Stylos</Link>
                </li>
                <li>
                  <Link to="">Classeurs</Link>
                </li>
                <li>
                  <Link to="">Colles</Link>
                </li>
                <li>
                  <Link to="">Marqeurs</Link>
                </li>
                <li>
                  <Link to="">Rubans adhésifs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">Informatiques</Link>
              <ul>
                <li>
                  <Link to="">Pc bureautiques</Link>
                </li>
                <li>
                  <Link to="">Ecrans</Link>
                </li>
                <li>
                  <Link to="">Rétroprojecteurs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">Bureautiques</Link>
              <ul>
                <li>
                  <Link to="">Fauteuils</Link>
                </li>
                <li>
                  <Link to="">jQuery</Link>
                </li>
                <li>
                  <Link to="">Other</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
