import * as React from "react";
import "./category.css";
import { Link } from "react-router-dom";


export default function Category() {
  

  return (
    <div id="contain">
      <ul>
        <li className="category">
          <h3 id="title">Catégories</h3>
          <ul>
            <li>
              <Link to="">Resources</Link>
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
              <Link to="">Links</Link>
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
              <Link to="">Tutorials</Link>
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
          </ul>
        </li>
      </ul>
    </div>
  );
}
