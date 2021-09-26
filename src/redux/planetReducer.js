import { createSlice } from "@reduxjs/toolkit";
import planets from "../data/planets.json";

const initialPlanetState = {
  planet: planets,
  choice: 0,
  currentPlanetIndex: 0,
  currentDescriptionIndex: 0,
  planetChoice: 0,
};

const planetSlice = createSlice({
  name: "solar",
  initialState: initialPlanetState,
  reducers: {
    setCurrentDescription: (state, action) => {
      const choice = action.payload;

      if (choice === 1) {
        state.currentDescriptionIndex = 1;
      } else if (choice === 2) {
        state.currentDescriptionIndex = 2;
      } else {
        state.currentDescriptionIndex = 0;
      }

      state.choice = choice;
    },

    planetSwap: (state, action) => {
      const planetChoice = action.payload;

      if (planetChoice === 1) {
        state.currentPlanetIndex = 1;
      } else if (planetChoice === 2) {
        state.currentPlanetIndex = 2;
      } else if (planetChoice === 3) {
        state.currentPlanetIndex = 3;
      } else if (planetChoice === 4) {
        state.currentPlanetIndex = 4;
      } else if (planetChoice === 5) {
        state.currentPlanetIndex = 5;
      } else if (planetChoice === 6) {
        state.currentPlanetIndex = 6;
      } else if (planetChoice === 7) {
        state.currentPlanetIndex = 7;
      } else {
        state.currentPlanetIndex = 0;
      }

      state.planetChoice = planetChoice;
    },
  },
});

export const currentPlanetIndex = (state) =>
  state.solar.planet[state.solar.currentPlanetIndex];

export const currentDescriptionIndex = (state) =>
  state.solar.planet[state.solar.currentDescriptionIndex];

export const currentDescription = (state) => state.solar.choice;
export const currentPlanet = (state) => state.solar.planetChoice;

export const {
  setCurrentPlanet,
  setCurrentDescription,
  planetSwap,
  defaultPlanet,
} = planetSlice.actions;

export default planetSlice.reducer;
