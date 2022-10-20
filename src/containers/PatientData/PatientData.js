import moment from "moment";
import React, { useState } from "react";
import SquareButton from "../../components/SquareButton/SquareButton";
import Table from "../../components/Table/Table";
import { patientData } from "../../data/patientData";
import General from "../General/General";
import "./PatientData.css";
import { motion } from "framer-motion";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import { useDispatch, useSelector } from "react-redux";
import {
	getRouteState,
	setDataView,
	setModalView,
} from "../../store/reducer/routeReducer";
import cls from "classnames";
import PatientTitle from "../../components/PatientTitle/PatientTitle";

const PatientData = () => {
	const dispatch = useDispatch();
	const { dataView: dataViewState } = useSelector(getRouteState);

	// Test Function
	const [selected, setSelected] = useState(1);

	const consultationSettings = {
		data: patientData,
		datamap: {
			name: "namerins",
			dislikes: "Hates",
			birthday: "BDay",
			status: "Stats",
			likes: "Likenings",
		},
		datasettings: {
			birthday: (value) => {
				return setBirthday(value);
			},
		},
	};
	const admissionSettings = {
		data: patientData,
		datamap: {
			dislikes: "DisAdmit",
			birthday: "DisDay",
			status: "Distats",
			likes: "DisLikes",
		},
		datasettings: {
			birthday: (value) => {
				return setBirthday(value);
			},
			likes: (value) => {
				return value + "Hey";
			},
		},
	};

	const setBirthday = (value) => {
		return moment(value).format("MMMM DD, YYYY");
	};

	return (
		<div className="PatientData">
			<div className="PatientData__overlay"></div>
			<div className="PatientData__nav-container">
				<motion.div
					whileTap={{ scale: 0.9 }}
					className={cls(
						"PatientData__nav",
						dataViewState === "General" &&
							"PatientData__nav--selected"
					)}
					onClick={() => setDataView(dispatch)("General")}
				>
					General
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.9 }}
					className={cls(
						"PatientData__nav",
						dataViewState === "Consultation" &&
							"PatientData__nav--selected"
					)}
					onClick={() => setDataView(dispatch)("Consultation")}
				>
					Consultation
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.9 }}
					className={cls(
						"PatientData__nav",
						dataViewState === "Admission" &&
							"PatientData__nav--selected"
					)}
					onClick={() => setDataView(dispatch)("Admission")}
				>
					Admission
				</motion.div>
			</div>
			<div className="PatientData__mid-container">
				<PatientTitle patient="Eric Bacal" />
				<div className="PatientData__patient-status">Admitted</div>
				{dataViewState !== "General" && (
					<InputWithLabel
						className="PatientData__search"
						variant="small"
						width="40rem"
					/>
				)}
			</div>
			<div className="PatientData__data-container">
				{dataViewState === "General" ? (
					<General className="PatientData__data" />
				) : (
					<Table
						className="PatientData__data"
						data={
							dataViewState === "Consultation"
								? consultationSettings.data
								: admissionSettings.data
						}
						datamap={
							dataViewState === "Consultation"
								? consultationSettings.datamap
								: admissionSettings.datamap
						}
						datasettings={
							dataViewState === "Consultation"
								? consultationSettings.datasettings
								: admissionSettings.datasettings
						}
						onSort={(column) => {
							console.log(column);
						}}
						onItemClick={(id) => {
							setSelected(id);
							console.log(id);
						}}
						selected={selected}
					/>
				)}
			</div>
			{dataViewState !== "General" && (
				<div className="PatientData__button-container">
					<SquareButton
						className="PatientData__button"
						onClick={() => {
							if (dataViewState === "Consultation") {
								setModalView(dispatch)("AddConsultation");
							} else {
								setModalView(dispatch)("AddAdmission");
							}
						}}
					>
						{`Add ${dataViewState}`}
					</SquareButton>
					<SquareButton
						className="PatientData__button"
						onClick={() => {
							if (dataViewState === "Consultation") {
								setModalView(dispatch)("ViewConsultation");
							} else {
								setModalView(dispatch)("ViewAdmission");
							}
						}}
					>
						{`View ${dataViewState}`}
					</SquareButton>
				</div>
			)}
		</div>
	);
};

export default PatientData;
