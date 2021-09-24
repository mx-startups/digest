import React from "react";
import styled from "styled-components";

const $ = {
  section: styled.section`
    margin-top: 2em;
    padding: 4em 2em;
    background-color: black;

    div {
      width: 50%;

      :first-child {
        color: white;
      }

      :nth-child(2) {
        background-color: lightslategray;
      }
    }
  `
};

const Jumbotron = () => {
  return(
    <$.section>
      <div>
        <h1>Descubre los programas que hacen <span className="accent">que la innovación startup</span> suceda en México</h1>
      </div>

      <div>
      </div>
    </$.section>
  );
};

export default Jumbotron;