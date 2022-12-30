import { createSlice } from "@reduxjs/toolkit";

const GymSlice = createSlice({
  name: "gymList",
  initialState: { gyms: [], selectedPlans: [] },
  reducers: {
    addGyms(state, action) {
      state.gyms = action.payload;
    },
    addPlan(state, action) {
      state.selectedPlans = action.payload;
    },
  },
});

export default GymSlice.reducer;
export const GymAction = GymSlice.actions;
