import React from "react";
import "./LineInput.css";
import cls from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

const LineInput = ({ className, editState = true, width }) => {
	return (
		<div className="LineInput">
			<FontAwesomeIcon
				className="LineInput__icon"
				icon={faArrowDownWideShort}
			/>
			<input
				className={cls(
					"LineInput__input",
					editState && "LineInput__input--editable",
					className
				)}
				style={{ width: width }}
			/>
		</div>
	);
};

export default LineInput;
