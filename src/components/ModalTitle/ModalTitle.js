import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ModalTitle.css";

const ModalTitle = ({ title = "Default Title" }) => {
	return (
		<div className="ModalTitle">
			<FontAwesomeIcon
				className="ModalTitle__header-icon"
				icon={faIdCard}
			/>
			<div className="ModalTitle__header">{title}</div>
		</div>
	);
};

export default ModalTitle;
