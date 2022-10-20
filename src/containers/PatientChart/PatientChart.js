import React from "react";
import Table from "../../components/Table/Table";
import "./PatientChart.css";
import { patientData } from "../../data/patientData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import { motion } from "framer-motion";
import ModalTitle from "../../components/ModalTitle/ModalTitle";
import { useDispatch } from "react-redux";
import { setModalView } from "../../store/reducer/routeReducer";

const PatientChart = () => {
	const dispatch = useDispatch();

	const admissionSettings = {
		data: patientData,
		datamap: {
			dislikes: "DisAdmit",
			birthday: "DisDay",
			status: "Distats",
			likes: "DisLikes",
		},
		datasettings: {
			likes: (value) => {
				return value + "Hey";
			},
		},
	};
	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, type: "Inertia" }}
			className="PatientChart"
		>
			<div className="PatientChart__header-container">
				<ModalTitle title="Patients" />
				<motion.div
					whileTap={{ scale: 0.9 }}
					className="PatientChart__header-icon PatientChart__add-patient"
					onClick={() => setModalView(dispatch)("AddPatients")}
				>
					<FontAwesomeIcon icon={faUserPlus} />
				</motion.div>

				<InputWithLabel
					className="PatientChart__search"
					label="Search"
					icon={faSearch}
					variant="small"
					width="40rem"
				/>
			</div>
			<Table
				data={admissionSettings.data}
				datamap={admissionSettings.datamap}
				datasettings={admissionSettings.datasettings}
				onSort={(column) => {
					console.log(column);
				}}
				onItemClick={(id) => {
					console.log(id);
				}}
				selected={1}
			/>
		</motion.div>
	);
};

export default PatientChart;
