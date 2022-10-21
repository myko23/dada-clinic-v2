import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "selected",
	initialState: {
		patient: false,
		consult: false,
		admission: false,
	},
	reducers: {
		selectSet: (selected, action) => {
			selected[action.payload.type] = action.payload.content;
		},
	},
});

export default slice.reducer;
const { selectSet } = slice.actions;

export const setSelected = (dispatch) => (type, content) => {
	dispatch(selectSet({ type, content }));
};

export const getSelectedState = (state) => state.selected;
