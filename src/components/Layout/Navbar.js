import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const $ = {
  nav: styled.nav`
    ul li {
      display: inline;
      text-transform: uppercase;
      font-weight: bold;

      :not(:first-child)  { padding-left: 2em; }
      a                   { text-decoration: none; }
    }
  `
};

const parseMonth = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre"
};

const Navbar = () => {
  return(
    <$.nav>
      <ul>
        <li>
          <Link to="/about">Quienes somos</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>

        <li>
          <Link to="/digest" className="accent">
            <span>Digest {parseMonth[new Date().getMonth()]}</span>
          </Link>
        </li>
      </ul>
    </$.nav>
  );
};

export default Navbar;