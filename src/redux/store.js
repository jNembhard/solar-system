import { configureStore } from "@reduxjs/toolkit";
import planetReducer from "./planetReducer";

const store = configureStore({
  reducer: {
    solar: planetReducer,
  },
});

export default store;
