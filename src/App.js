import "./App.css";
import React, { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/organisms/Navbar";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import planet from "./data/planets.json";
import PlanetInfo from "./components/organisms/PlanetInfo";
import styled from "styled-components";
// Atomic Design Pattern

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <PlanetInfo />
    </>
  );
}

export default App;
