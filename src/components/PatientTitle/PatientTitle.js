import React from "react";
import "./PatientTitle.css";
import cls from "classnames";

const PatientTitle = ({ patient = "Meg Franco P. Bacal", className }) => {
	return (
		<div className={cls("PatientTitle", className)}>
			<div className="PatientTitle__label">Patient</div>
			<div className="PatientTitle__name">{patient}</div>
		</div>
	);
};

export default PatientTitle;
