// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const themesSlice = createSlice({
	name: "auth",
	initialState: {
		theme: 'dark'
	},
	reducers: {
		setTheme: (state,action) => {
            state.theme = action.payload
        }
	},
});

export const { setTheme } = themesSlice.actions;
export default themesSlice.reducer;