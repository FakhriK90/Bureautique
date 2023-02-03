import * as React from "react";
import "./category.css";



export default function Category() {
  

  return (
    <div id="contain">
      <ul>
        <li className="category">
          <a href="#">Catégories</a>
          <ul>
            <li>
              <a href="#">Resources</a>
              <ul>
                <li>
                  <a href="#">HTML/CSS</a>
                </li>
                <li>
                  <a href="#">jQuery</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Links</a>
              <ul>
                <li>
                  <a href="#">HTML/CSS</a>
                </li>
                <li>
                  <a href="#">jQuery</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Tutorials</a>
              <ul>
                <li>
                  <a href="#">HTML/CSS</a>
                </li>
                <li>
                  <a href="#">jQuery</a>
                </li>
                <li>
                  <a href="#">Other</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
