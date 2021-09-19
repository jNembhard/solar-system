import "./App.css";
import React, { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/organisms/Navbar";
// Atomic Design Pattern

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
