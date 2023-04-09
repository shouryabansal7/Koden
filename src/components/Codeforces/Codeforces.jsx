import React, { useEffect } from "react";
import "./Codeforces.css";
import { useGlobalContext } from "../../context";
import NavBar from "../Navbar/Navbar.jsx";
import Rating from "../Codeforces_Rating/Rating";
const Codeforces = () => {
  const { result } = useGlobalContext();
  return (
    <div className="cf">
      <NavBar />
      <div className="table">
        <div className="cfUpcomingTableHeading">RECENT CODEFORCES CONTESTS</div>
        {result.slice(0, 5).map((curPost) => {
          const { id, name } = curPost;
          const contestLink = `https://codeforces.com/contest/${curPost.id}`;
          return (
            <div className="contests">
              <h2 className="cheading">{name}</h2>
              <a href={contestLink}>{contestLink}</a>
            </div>
          );
        })}
      </div>
      <br />
      <Rating />
    </div>
  );
};

export default Codeforces;
