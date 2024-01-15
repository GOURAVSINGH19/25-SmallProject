import React from "react";
import "../index.css";
import { RxDotFilled } from "react-icons/rx";
import { BiRefresh } from "react-icons/bi";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className=" header">
      <div className="title-left">
        <a className="link-btn">
          <span className="btn-click">
          <span className="icon"><BiRefresh/></span>
          <div className="name-title">
            <span className="code-by">Code by</span>
            <span className="coder-name">
              <span className="first-name">Gourav</span>
              <span className="second-name">Singh</span>
            </span>
          </div>
          </span>
        </a>
      </div>
      <div className="title-right">
        <ul>
          <Link to='#' className="li">
            Menu
            <span className="dot"><RxDotFilled/></span>
          </Link>
          <Link to='#' className="li">
            About
            <span className="dot"><RxDotFilled/></span>
          </Link>
          <Link to='#' className="li">
            Contact
            <span className="dot"><RxDotFilled/></span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
