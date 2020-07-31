import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <span className="text-muted text-center">© 2020 Capgemini.</span>
          <ul className="footer-links">
            <li>
              <Link to="/" className="">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
