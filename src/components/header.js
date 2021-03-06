import React from "react";
import "./styles/styles.css";
import logo from "./images/emerald-farm-logo.png";
// import {Link} from "react-router-dom"
import Login from "../pages/landing/login";
// import { Modal} from 'react-bootstrap'
import Modal from "react-modal";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { NavbarBrand, Nav, NavDropdown } from "react-bootstrap";

const pages = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Farm Project", href: "/project" },
  { name: "F.A.Q", href: "/faq" },
  { name: "Blog", href: "/blog" },
];

const customStyles = {
  content: {
    border: "none",
    background: "none",
  },
};

const Header = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div style={{ justifyContent: "flex-end" }}>
          <Login closeModal={closeModal} />
        </div>
      </Modal>

      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ background: "#0E4944" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="emerald-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              {pages.map((page, i) => (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    // aria-current="page"
                    href={page.href}
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-flex">
              {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
              <button
                className="btn me-2 login-button"
                type="submit"
                onClick={handleLogin}
              >
                Log in
              </button>
              <button className="btn register-button" type="submit">
                <Link to="/signup">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
