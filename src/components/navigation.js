//import react from react
import React from "react";

//Export - Extend - Render - Return
export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light py-3"
        id="my-nav"
      >
        <a class="navbar-brand" href="#">
          BingeTV
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Movies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                TV Shows
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Kids
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
