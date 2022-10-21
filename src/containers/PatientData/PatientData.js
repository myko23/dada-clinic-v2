import React, { useState } from "react";
import SquareButton from "../../components/SquareButton/SquareButton";
import Table from "../../components/Table/Table";
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
import {
	getSelectedState,
	setSelected,
} from "../../store/reducer/selectedReducer";
import { useFetchQuery } from "../../lib/hooks/useFetchQuery";
import { formatDate } from "../../lib/utils/formatDate";
import { getDateDiff } from "../../lib/utils/getDateDiff";
import useGetPatient from "../../lib/hooks/useGetPatient";

const PatientData = () => {
	const { patient } = useGetPatient();

	const { dataView: dataViewState } = useSelector(getRouteState);
	const {
		patient: selectedPatient,
		consultation: selectedConsultation,
		admission: selectedAdmission,
	} = useSelector(getSelectedState);

	const dispatch = useDispatch();
	const [searchConsultation, setSearchConsultation] = useState("");
	const [searchAdmission, setSearchAdmission] = useState("");

	const consultationData = useFetchQuery(["consultations", selectedPatient]);
	const admissionData = useFetchQuery(["admissions", selectedPatient]);

	const consultationSettings = {
		data: consultationData,
		datamap: {
			dateofconsult: "Date",
			age: "Age",
			chiefcomplaint: "Chief Complaint",
			diagnosis: "Diagnosis",
		},
		datasettings: {
			dateofconsult: (value) => {
				return formatDate(value.dateofconsult, "MMMM DD, YYYY");
			},
			age: (value) => {
				return getDateDiff(patient.birthday, value.dateofconsult);
			},
		},
	};
	const admissionSettings = {
		data: admissionData,
		datamap: {
			dateofconsult: "Date",
			datedischarge: "Discharge",
			age: "Age",
			diagnosis: "Diagnosis",
		},
		datasettings: {
			dateofconsult: (value) => {
				return formatDate(value.dateofconsult, "MMMM DD, YYYY");
			},
			datedischarge: (value) => {
				return value?.datedischarge ?? "NA";
			},
			age: (value) => {
				return getDateDiff(patient.birthday, value.dateofconsult);
			},
		},
	};

	return (
		<div className="PatientData">
			<div
				className={cls(
					"PatientData__overlay",
					!selectedPatient && "PatientData__overlay--front"
				)}
			>
				{!selectedPatient && (
					<p className="PatientData__overlay-text">
						Please Select a Patient
					</p>
				)}
			</div>
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
				<PatientTitle
					patient={
						patient
							? `${patient.firstname} ${patient.lastname}`
							: "No Patient"
					}
				/>
				<div className="PatientData__patient-status">Admitted</div>
				{dataViewState !== "General" && (
					<InputWithLabel
						className="PatientData__search"
						variant="small"
						width="40rem"
						value={
							dataViewState === "Consultation"
								? searchConsultation
								: searchAdmission
						}
						setValue={
							dataViewState === "Consultation"
								? setSearchConsultation
								: setSearchAdmission
						}
					/>
				)}
			</div>
			<div className="PatientData__data-container">
				{dataViewState === "General" ? (
					<General className="PatientData__data" patient={patient} />
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
						onItemClick={(id) => {
							dataViewState === "Consultation"
								? setSelected(dispatch)("consultation", id)
								: setSelected(dispatch)("admission", id);
						}}
						search={
							dataViewState === "Consultation"
								? searchConsultation
								: searchAdmission
						}
						selected={
							dataViewState === "Consultation"
								? selectedConsultation
								: selectedAdmission
						}
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
