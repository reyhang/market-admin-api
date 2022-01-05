import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function Header() {
  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center">
          <img src="/assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">MarkteApi</span>
        </NavLink>
      </div>
      {/* End Logo */}

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              data-bs-toggle="dropdown"
            >
              <img
                src="/assets/img/messages-1.jpg"
                alt="Profile"
                className="rounded-circle"
              />
              <span className="d-none d-md-block dropdown-toggle ps-2">
                M. Anderson
              </span>
            </a>
            {/* End Profile Iamge Icon */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Maria Anderson</h6>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <button
                  className="dropdown-item d-flex align-items-center"
                  onClick={handleLogOut}
                >
                  <i className="bi bi-box-arrow-right" />
                  <span>Sign Out</span>
                </button>
              </li>
            </ul>
            {/* End Profile Dropdown Items */}
          </li>
          {/* End Profile Nav */}
        </ul>
      </nav>
      {/* End Icons Navigation */}
    </header>
  );
}
