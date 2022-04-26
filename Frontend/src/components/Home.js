import React from "react";
import "./home.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Public Library</span>
        <span className="headerTitleLg">Welcome to Somerset</span>
      </div>
      <img
        className="headerImg"
        src="https://images.snapwi.re/2ccc/5ed646da7a02f70f0d13c0dd.w800.jpg"
        alt=""
      />
    </div>
  );
}
