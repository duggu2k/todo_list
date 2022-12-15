import React from "react";
import '../components_style/nav.css';
import { Link } from "react-router-dom";


export default function Header(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="flex">
          <Link className="nav-brand" to="/">
            Todos-List
          </Link>
          <div>
            <ul className="navbarNav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
