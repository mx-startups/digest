import { Link } from 'gatsby';
import React from 'react';
import styled from "styled-components";
import GlobalStyle from '../components/Layout/GlobalStyle';

const $ = {
  section: styled.section`
    padding-top: 3em;
    text-align: center;
  `
};

function Page() {
  return (
    <>
      <GlobalStyle />
      <$.section>
        <h1>404</h1>
        <p style={{marginBottom: "2em"}}>No encontramos esa página 🤔</p>
        <Link to="/">&#60; Regresar</Link>
      </$.section>
    </>
  );
}

export default Page;