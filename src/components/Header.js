/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import image from "../assets/images.jpeg";

export default function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <img className="image" src={image} alt=""></img>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" activeclassname="active" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/add-employee">
                  Create Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/employees">
                  View Accounts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="ms-auto">
            <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
