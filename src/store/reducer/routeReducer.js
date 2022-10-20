import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "route",
	initialState: {
		login: false,
		dataView: "Consultation",
		modalView: "default",
	},
	reducers: {
		appLogin: (route, action) => {
			route.login = action.payload;
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
const { appLogin, dataViewSet, modalViewSet } = slice.actions;

export const loginApp = (dispatch) => (login) => {
	dispatch(appLogin(login));
};

export const setDataView = (dispatch) => (dataView) => {
	dispatch(dataViewSet(dataView));
};

export const setModalView = (dispatch) => (modalView) => {
	dispatch(modalViewSet(modalView));
};

export const getRouteState = (state) => state.route;
