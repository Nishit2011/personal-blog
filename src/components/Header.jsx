import React from "react";

import Menu from "./Menu";
import style from "../app.module.css";

const Header = () => {
  return (
    <div>
      <div className={style.header}>
        <div className={style.headerName}>
          <h1>TECH DIGEST</h1>
          <h5>by Nishit Ranjan</h5>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default Header;
