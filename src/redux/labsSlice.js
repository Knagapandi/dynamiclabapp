import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  labs: [],
};

const labsSlice = createSlice({
  name: "labs",
  initialState,
  reducers: {
    addLab(state, action) {
      state.labs.push(action.payload);
    },
    editLab(state, action) {
      const index = state.labs.findIndex((lab) => lab.id === action.payload.id);
      if (index >= 0) {
        state.labs[index] = action.payload;
      }
    },
  },
});

export const { addLab, editLab } = labsSlice.actions;
export default labsSlice.reducer;
