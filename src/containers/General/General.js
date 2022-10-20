import React, { useState } from "react";
import "./General.css";
import cls from "classnames";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import {
	faBuilding,
	faCake,
	faChurch,
	faClock,
	faFileCirclePlus,
	faPersonBreastfeeding,
	faPersonPregnant,
	faPhone,
	faUser,
	faVirus,
} from "@fortawesome/free-solid-svg-icons";
import EditFormButton from "../../components/EditFormButton/EditFormButton";

const General = ({ className }) => {
	const [editState, setEditState] = useState(false);

	return (
		<div className={cls("General", className, "form")}>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="first name"
					icon={faUser}
					width="50rem"
					editState={editState}
				/>
				<InputWithLabel
					variant="form"
					label="middle name"
					icon={faUser}
					width="50rem"
					editState={editState}
				/>
				<InputWithLabel
					variant="form"
					label="last name"
					icon={faUser}
					width="50rem"
					editState={editState}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="Birthday"
					icon={faCake}
					width="30rem"
					editState={editState}
				/>
				<InputWithLabel
					variant="form"
					label="Age"
					icon={faClock}
					width="15rem"
					editState={false}
				/>
				<InputWithLabel
					variant="form"
					label="contact no."
					icon={faPhone}
					width="50rem"
					editState={editState}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="address"
					icon={faBuilding}
					width="100%"
					editState={editState}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="Guardian"
					icon={faPersonBreastfeeding}
					width="50rem"
					editState={editState}
				/>
				<InputWithLabel
					variant="form"
					label="Relationship"
					icon={faPersonPregnant}
					width="50rem"
					editState={editState}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="Religion"
					icon={faChurch}
					width="40rem"
					editState={editState}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="Past History"
					icon={faBuilding}
					width="100%"
					editState={editState}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="current conditions"
					icon={faFileCirclePlus}
					width="100%"
					editState={editState}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="allergies"
					icon={faVirus}
					width="100%"
					editState={editState}
				/>
			</div>
			<EditFormButton
				editConfigs={{ editState, setEditState }}
				onSave={() => {}}
			/>
		</div>
	);
};

export default General;
