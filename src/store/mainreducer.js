import { combineReducers } from "redux";
import routeReducer from "./reducer/routeReducer";

export default combineReducers({
	route: routeReducer,
});
