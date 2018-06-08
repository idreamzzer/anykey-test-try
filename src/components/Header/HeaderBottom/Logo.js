import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImg} alt="ANYLVL logo" width="170" height="50" />
    </Link>
  );
};

export default Logo;
