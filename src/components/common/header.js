import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/capgemini-icon.png";

class Header extends React.Component {
  render() {
    return (
      <header className="bg-bdr bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link
              to="/"
              className="navbar-brand fadeInUp"
              style={{ animationDelay: "100ms" }}
            >
              <img src={logo} height="28px" alt="Capgemini" />
              <span>Covid 19 - IN</span>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ml-auto">
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className="nav-item nav-link fadeInUp"
                  style={{ animationDelay: "250ms" }}
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-house"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="nav-item nav-link fadeInUp"
                  style={{ animationDelay: "350ms" }}
                >
                  About
                </NavLink>
                <NavLink
                  to="/blog"
                  activeClassName="active"
                  className="nav-item nav-link fadeInUp"
                  style={{ animationDelay: "450ms" }}
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="nav-item nav-link fadeInUp"
                  style={{ animationDelay: "550ms" }}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
