import {
	faCircleUser,
	faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import setUserName from "../../lib/utils/setUserName";
import { lougoutApp } from "../../store/reducer/routeReducer";
import { getUserState } from "../../store/reducer/userReducer";
import "./NavBar.css";

const NavBar = () => {
	const [cookie, setCookie, removeCookie] = useCookies(["dada-token"]);
	const dispatch = useDispatch();
	const { nickname, lastname, title } = useSelector(getUserState);

	const [menu, setMenu] = useState(false);

	const appName = process.env.REACT_APP_APP_NAME;

	return (
		<div className="NavBar">
			<div className="NavBar__header">{appName}</div>
			<div className="NavBar__user-container">
				<FontAwesomeIcon
					icon={faCircleUser}
					className="NavBar__user-icon"
				/>
				<div className="NavBar__user" onClick={() => setMenu(!menu)}>
					{setUserName(nickname, lastname, title)}
				</div>
				{menu && (
					<div className="NavBar__menu">
						<FontAwesomeIcon
							className="NavBar__menu-icon"
							icon={faRightFromBracket}
						/>
						<div
							className="NavBar__menu-item"
							onClick={() => {
								removeCookie("dada-token");
								lougoutApp(dispatch);
							}}
						>
							Logout
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;
