import { createGlobalStyle } from "styled-components";
import AntonioMedium from "./fonts/Antonio-Medium.ttf";
import SpartanRegular from "./fonts/Spartan-Regular.ttf";
import SpartanBold from "./fonts/Spartan-Bold.ttf";
import { theme } from "./theme";
// import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    font-family: "Spartan", sans-serif;
    font-weight: ${theme.spartanRegular};
  }

  h1,
  h2 {
    font-family: "Antonio", sans-serif;
    font-weight: ${theme.antonioMedium};
  }

  h3,
  h4 {
    font-family: "Spartan", sans-serif;
    font-weight: ${theme.spartanBold};
  }

  * {
    margin: 0;
    padding: 0;
    background-color: ${theme.background};
    background-image: url("/assets/background-stars.svg");
  }

  @font-face {
    font-family: "Antonio";
    src: url(${AntonioMedium}) format("truetype");
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: "Spartan";
    src: url(${SpartanRegular}) format("truetype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Spartan";
    src: url(${SpartanBold}) format("truetype");
    font-style: normal;
    font-weight: 700;
  }
`;
