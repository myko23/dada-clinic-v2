import { decodeToken } from "react-jwt";
import { registerUser } from "../../store/reducer/userReducer";

const loadTokenToState = (dispatch) => async (token) => {
	const {
		email,
		username,
		firstname,
		middlename,
		lastname,
		nickname,
		title,
		permissions,
	} = await decodeToken(token);

	registerUser(dispatch)({
		email,
		username,
		firstname,
		middlename,
		lastname,
		nickname,
		title,
		permissions,
		token: token,
	});

	return true;
};

export default loadTokenToState;
