import React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import Navbar from './Navbar';

const icn = {
  ig: FaInstagram, yt: FaYoutube, tw: FaTwitter,
  arrow: HiOutlineArrowRight
};

const $ = {
  header: styled.header`
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding-top: 3em;
    width: 90%;

    div:first-child {
      font-size: 16pt;
      font-weight: bold;

      a { text-decoration: none; }
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      #social li {
        display: inline;
        :not(:first-child)  { padding-left: 1em; }
        a                   { color: black; }
      }
    }

  `
};


const Header = () => {
  return(
    <$.header>
      <div>
        <span>
          <Link to="/">
            techstars_<br/>
            <span className="accent">Startup Digest<br/></span>
            México
          </Link>
        </span>
      </div>

      <div>
        <ul id="social">
          <li>
            <Link to="https://www.instagram.com/startupweekend" target="_blank">
              <icn.ig />
            </Link>
          </li>

          <li>
            <Link to="https://www.youtube.com/c/techstarstv" target="_blank">
              <icn.yt />
            </Link>
          </li>

          <li>
            <Link to="https://twitter.com/StartupDigestMX" target="_blank">
              <icn.tw />
            </Link>
          </li>
        </ul>

        <Navbar />
      </div>
    </$.header>
  );
};

export default Header;