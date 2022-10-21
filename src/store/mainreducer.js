import { combineReducers } from "redux";
import routeReducer from "./reducer/routeReducer";
import selectedReducer from "./reducer/selectedReducer";
import userReducer from "./reducer/userReducer";

export default combineReducers({
	route: routeReducer,
	user: userReducer,
	selected: selectedReducer,
});
