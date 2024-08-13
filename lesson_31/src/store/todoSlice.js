import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      return (state.todos = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = todoSlice.actions;

export default todoSlice.reducer;
