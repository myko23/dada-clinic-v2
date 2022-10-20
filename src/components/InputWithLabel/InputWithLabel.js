import React from "react";
import "./InputWithLabel.css";
import cls from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InputWithLabel = ({
	label = "Label",
	className,
	placeholder = "",
	type = "text",
	variant = "form",
	icon,
	width = "100%",
	editState = true,
}) => {
	return (
		<div
			className={cls(
				"InputWithLabel",
				className,
				`InputWithLabel--${variant}`
			)}
			style={{ width: width }}
		>
			<p className="InputWithLabel__label">
				{variant === "small" ? "Search" : label}
			</p>
			{icon || variant === "small" ? (
				<FontAwesomeIcon
					icon={variant === "small" ? faSearch : icon}
					className="InputWithLabel__icon"
				/>
			) : null}
			<input
				type={type}
				className={cls(
					"InputWithLabel__input",
					editState && "InputWithLabel__input--editable"
				)}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default InputWithLabel;
