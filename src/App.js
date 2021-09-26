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
import planets from "./data/planets.json";
import PlanetInfo from "./components/organisms/PlanetInfo";
import styled from "styled-components";
// Atomic Design Pattern

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          {planets.map((planet) => (
            <Route path={`/${planet.name}`}>
              <PlanetInfo
                key={planet.id}
                name={planet.name}
                images={planet.images.planet}
                content={planet.overview.content}
                radius={planet.radius}
                revolution={planet.revolution}
                rotation={planet.rotation}
                temperature={planet.temperature}
                wikipedia={planet.overview.source}
              />{" "}
            </Route>
          ))}
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
