import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    darkMode: false,
    modeValue: "Dark mode",
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
    setDarkModeValue: (state, action) => {
      if (state.darkMode === false) {
        state.modeValue = "Dark mode";
      } else {
        state.modeValue = "Light mode";
      }
    },
  },
});

export const modeActions = modeSlice.actions;
export default modeSlice.reducer;
