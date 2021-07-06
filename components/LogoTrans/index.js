import React from "react";
import Link from "next/link";
import Img from "../Img";

// const menuIcon = require('/static/logo.png');

const Header = props => (
  <Link href="/">
    <a>
      <Img
        src="/static/logo-trans.png"
        alt="logo"
        m={props.m}
        height={{ xs: "2rem", sm: "2rem", md: "3rem", lg: "3rem" }}
      />
    </a>
  </Link>
);

export default Header;
