import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "user",
	initialState: {
		email: "",
		username: "",
		firstname: "",
		middlename: "",
		lastname: "",
		nickname: "",
		title: "",
		permissions: [],
		token: "",
	},
	reducers: {
		userRegistered: (route, action) => {
			route.email = action.payload.email;
			route.username = action.payload.username;
			route.firstname = action.payload.firstname;
			route.middlename = action.payload.middlename;
			route.lastname = action.payload.lastname;
			route.nickname = action.payload.nickname;
			route.title = action.payload.title;
			route.permissions = action.payload.permissions;
			route.token = action.payload.token;
		},
	},
});

export default slice.reducer;
const { userRegistered } = slice.actions;

export const registerUser = (dispatch) => (user) => {
	dispatch(userRegistered(user));
};

export const getUserState = (state) => state.user;
