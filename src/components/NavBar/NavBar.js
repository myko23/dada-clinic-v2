import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./NavBar.css";

const NavBar = ({ user = "Eric Bacal" }) => {
	const appName = process.env.REACT_APP_APP_NAME;

	return (
		<div className="NavBar">
			<div className="NavBar__header">{appName}</div>
			<div className="NavBar__user-container">
				<FontAwesomeIcon
					icon={faCircleUser}
					className="NavBar__user-icon"
				/>
				<div className="NavBar__user">Eric Bacal</div>
			</div>
		</div>
	);
};

export default NavBar;
