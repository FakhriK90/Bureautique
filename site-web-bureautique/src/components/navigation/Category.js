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
                  <ul>
                <li>
                  <Link to="">Bic</Link>
                </li>
                <li>
                  <Link to="">Staddler</Link>
                </li>
              
                <li>
                  <Link to="">Other</Link>
                </li>
              </ul>
                </li>
                <li>
                  <Link to="">Papiers</Link>
                </li>
                <li>
                  <Link to="">Other</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">Informatiques</Link>
              <ul>
                <li>
                  <Link to="">HTML/CSS</Link>
                </li>
                <li>
                  <Link to="">jQuery</Link>
                </li>
                <li>
                  <Link to="">Other</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">Bureautiques</Link>
              <ul>
                <li>
                  <Link to="">Fauteils</Link>
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
