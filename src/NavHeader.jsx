import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top nav-header">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Student Records Management
        </Link>

        <div className="nav-links">
          <ul className="list-unstyled d-flex align-items-center gap-2 m-0">
            <li>
              <Link to="/" className="btn btn-light nav-link-btn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/addStudents" className="btn btn-primary nav-link-btn">
                Add Student
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
