import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
const navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="heading">
          <Link to="/" className="navlink">
            KODEN
          </Link>
        </div>
        <div className="pages">
          <span>
            <Link to="/codeforces" className="navlink">
              CODEFORCES
            </Link>
          </span>
          <span>
            <Link to="/leetcode" className="navlink">
              LEETCODE
            </Link>
          </span>
          <span>
            <Link to="/codechef" className="navlink">
              CODECHEF
            </Link>
          </span>
          <span>
            <Link to="/Sheets" className="navlink">
              SOLVE A SHEET
            </Link>
          </span>
          {/* <span><Link to="/login" className="navlink">Login/Signup</Link></span> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default navbar;
