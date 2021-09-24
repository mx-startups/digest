import React from "react";
import styled from "styled-components";
import Jumbotron from "./Jumbotron";

const $ = {
  div: styled.div`
    width: 90%;
    margin: auto;

    div {
      hr {
        border: 0;
        border-top: 0.3em solid DeepSkyBlue;
      }

      section h1, aside h1 {
        text-transform: lowercase;
      }
    }
  `
};

const Home = () => {
  return(
    <$.div>
      <Jumbotron />

      <div>
        <section>
          <h1>Este mes</h1>
          <hr />
        </section>

        <section>
          <h1>Reviews</h1>
          <hr />
        </section>

        <aside>
          <h1>Destacado este mes</h1>
          <hr />
        </aside>
      </div>

    </$.div>
  );
};

export default Home;