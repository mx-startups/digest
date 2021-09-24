import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";
import GlobalStyle from '../components/Layout/GlobalStyle';

import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const icn = {
  ig: FaInstagram, yt: FaYoutube, tw: FaTwitter,
  arrow: HiOutlineArrowRight
};

const $ = {
  section: styled.section`
    padding-top: 3em;
    text-align: center;

    span { color: DeepSkyBlue }

    ul {
      padding-top: 1em;

      li {
        display: inline;
        :not(:first-child)  { padding-left: 1em; }
        a                   { color: black; }
      }
    }

    p { margin-top: 2em }

    button {
      margin-top: 1em;
      padding: 0.7em 1.2em;

      background-color: DeepSkyBlue;
      border: none;

      a {
        color: white;
        font-weight: bold;
        text-decoration: none;
      }
    }
  `
};

function Index() {
  return (
    <>
      <GlobalStyle />
      <$.section>
        <h1>
          techstars_<br/>
          <span>Startup Digest<br/></span>
          México
        </h1>

        <ul>
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

        <p>
          ¡Te resumimos los eventos de transformación digital que suceden en México!<br/>
          Explora nuestra selección de programas en Twitter:
        </p>
        <button>
          <a href="https://twitter.com/StartupDigestMX">Continuar <icn.arrow/></a>
        </button>
      </$.section>
    </>
  );
}

export default Index;