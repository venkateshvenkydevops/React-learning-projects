import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    multiply: (state, action) => {
      state.value = action.payload.value * action.payload.valuetwo;
    },
    add: (state, action) => {
      state.value = action.payload.value + action.payload.valuetwo;
    },
  },
});
export const { multiply, add } = counterslice.actions;
export default counterslice.reducer;
