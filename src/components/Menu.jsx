import React from "react";
import style from "../app.module.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className={style.menu}>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/webdev">
        <li>Web Development</li>
      </Link>
      <Link to="/cloud">
        <li>Cloud</li>
      </Link>
      <Link to="/docker">
        <li>Docker</li>
      </Link>
      <Link to="/k8s">
        <li>Kubernetes</li>
      </Link>
      {/* <Link to="backend">Backend</Link> */}
      <Link to="/arch">
        <li>Architecture</li>
      </Link>
    </div>
  );
};

export default Menu;
