import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeID: "forgot",
  visitingLocation: "",
  buildingName: "",
};

const employeeIDSlice = createSlice({
  name: "temporaryPass",
  initialState,
  reducers: {
    employeeID: (state) => {
      state.employeeID = state.employeeID === "forgot" ? "lost" : "forgot";
    },
    visitingLocation: (state, action) => {
      state.visitingLocation = action.payload;
    },
    buildingName: (state, action) => {
      state.buildingName = action.payload;
    },
  },
});

export const { employeeID, visitingLocation, buildingName } =
  employeeIDSlice.actions;

export default employeeIDSlice.reducer;
