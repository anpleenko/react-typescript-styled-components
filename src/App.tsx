import * as React from "react";
import "@openfonts/roboto_cyrillic";
import "core-js";
import "regenerator-runtime/runtime";

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import Feature from "./Feature";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    font-family: Roboto, sans-serif;
  }
  `;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Feature />
    </>
  );
}
