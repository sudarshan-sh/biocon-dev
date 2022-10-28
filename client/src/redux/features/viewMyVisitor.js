import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visitStatus: "visited_in",
};

const visitStatusSlice = createSlice({
  name: "viewMyVisitor",
  initialState,
  reducers: {
    visitStatus: (state) => {
      state.visitStatus =
        state.visitStatus === "visited_in" ? "visited_out" : "visited_in";
    },
  },
});

export const { visitStatus } = visitStatusSlice.actions;

export default visitStatusSlice.reducer;
