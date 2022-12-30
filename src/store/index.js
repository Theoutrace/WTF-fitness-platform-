import { configureStore } from "@reduxjs/toolkit";
import GymListReducer from "./reducers/GymListReducer";

const Store = configureStore({
  reducer: {
    gyms: GymListReducer,
  },
});

export default Store;
