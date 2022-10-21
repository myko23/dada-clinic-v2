import React, { useEffect, useState } from "react";
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
import useGetPatient from "../../lib/hooks/useGetPatient";

const General = ({ className }) => {
	const { patient } = useGetPatient();
	const [editState, setEditState] = useState(false);

	const [firstname, setFirstName] = useState("");
	const [middlename, setMiddleName] = useState("");
	const [lastname, setLastName] = useState("");
	const [contactno, setContactNo] = useState("");
	const [address, setAddress] = useState("");
	const [guardian, setGuardian] = useState("");
	const [relationship, setRelationship] = useState("");
	const [religion, setReligion] = useState("");
	const [pasthistory, setPastHistory] = useState("");
	const [currentcondition, setCurrentCondition] = useState("");
	const [allergies, setAllergies] = useState("");

	const resetForm = () => {
		setFirstName(patient?.firstname ?? "");
		setMiddleName(patient?.middlename ?? "");
		setLastName(patient?.lastname ?? "");
		setContactNo(patient?.contactno ?? "");
		setAddress(patient?.address ?? "");
		setGuardian(patient?.guardian ?? "");
		setRelationship(patient?.relationship ?? "");
		setReligion(patient?.religion ?? "");
		setPastHistory(patient?.past_history ?? "");
		setCurrentCondition(patient?.current_condition ?? "");
		setAllergies(patient?.allergies ?? "");
	};

	useEffect(() => {
		resetForm();
	}, [patient]);

	return (
		<div className={cls("General", className, "form")}>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="first name"
					icon={faUser}
					width="50rem"
					editState={editState}
					value={firstname}
					setValue={setFirstName}
				/>
				<InputWithLabel
					variant="form"
					label="middle name"
					icon={faUser}
					width="50rem"
					editState={editState}
					value={middlename}
					setValue={setMiddleName}
				/>
				<InputWithLabel
					variant="form"
					label="last name"
					icon={faUser}
					width="50rem"
					editState={editState}
					value={lastname}
					setValue={setLastName}
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
					value={contactno}
					setValue={setContactNo}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="address"
					icon={faBuilding}
					width="100%"
					editState={editState}
					value={address}
					setValue={setAddress}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="Guardian"
					icon={faPersonBreastfeeding}
					width="50rem"
					editState={editState}
					value={guardian}
					setValue={setGuardian}
				/>
				<InputWithLabel
					variant="form"
					label="Relationship"
					icon={faPersonPregnant}
					width="50rem"
					editState={editState}
					value={relationship}
					setValue={setRelationship}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="Religion"
					icon={faChurch}
					width="40rem"
					editState={editState}
					value={religion}
					setValue={setReligion}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="Past History"
					icon={faBuilding}
					width="100%"
					editState={editState}
					value={pasthistory}
					setValue={setPastHistory}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="current conditions"
					icon={faFileCirclePlus}
					width="100%"
					editState={editState}
					value={currentcondition}
					setValue={setCurrentCondition}
				/>
			</div>
			<div className="form-row">
				<InputWithLabel
					variant="form"
					label="allergies"
					icon={faVirus}
					width="100%"
					editState={editState}
					value={allergies}
					setValue={setAllergies}
				/>
			</div>
			<EditFormButton
				editConfigs={{ editState, setEditState }}
				onSave={() => {}}
				onReset={resetForm}
			/>
		</div>
	);
};

export default General;
