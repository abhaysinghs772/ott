import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          MyOtt
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/movies"
              >
                Movies
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/bollywood">
                Bollywood
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/hollywood">
                Hollywood
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/series">
                Series
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
