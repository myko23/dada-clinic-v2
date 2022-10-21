import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "route",
	initialState: {
		login: false,
		dataView: "General",
		modalView: "default",
	},
	reducers: {
		appLogin: (route, action) => {
			route.login = action.payload;
		},
		userReset: (route, action) => {
			route.login = false;
			route.dataView = "General";
			route.modalView = "default";
		},
		dataViewSet: (route, action) => {
			route.dataView = action.payload;
		},
		modalViewSet: (route, action) => {
			route.modalView = action.payload;
		},
	},
});

export default slice.reducer;
const { appLogin, userReset, dataViewSet, modalViewSet } = slice.actions;

export const loginApp = (dispatch) => {
	dispatch(appLogin(true));
};
export const lougoutApp = (dispatch) => {
	dispatch(userReset());
	dispatch(appLogin(false));
};

export const setDataView = (dispatch) => (dataView) => {
	dispatch(dataViewSet(dataView));
};

export const setModalView = (dispatch) => (modalView) => {
	dispatch(modalViewSet(modalView));
};

export const getRouteState = (state) => state.route;
